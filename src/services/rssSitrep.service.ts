import { logger } from '../utils/logger.js';

export interface LiveSitrepItem {
  id: string;
  domain: 'AIR' | 'NAVY' | 'LAND' | 'STRATEGIC';
  eventType: 'TEST_FLIGHT' | 'COMMISSIONED' | 'DELIVERED' | 'ON_ORDER' | 'UPGRADE' | 'TRANSFER' | 'REPORT' | 'SHOT_DOWN' | 'DAMAGED';
  country: string;
  countryFlag: string;
  entityName: string;
  location?: string;
  summary: string;
  eventDate: string;
  confidence: 'VERIFIED' | 'HIGH' | 'ESTIMATED';
  sourceUrl: string;
  sourceName: string;
  sourceTag: 'IDRW' | 'DEFENCE_IN' | 'GLOBAL_OSINT';
  author?: string;
  rawCategories?: string[];
}

interface CacheData {
  timestamp: number;
  items: LiveSitrepItem[];
}

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

export class RssSitrepService {
  private cache: CacheData | null = null;
  private isFetching = false;

  private decodeHtml(html: string): string {
    return html
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, '-')
      .replace(/&#8212;/g, '—')
      .replace(/&#038;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private inferDomain(text: string): 'AIR' | 'NAVY' | 'LAND' | 'STRATEGIC' {
    const lower = text.toLowerCase();
    
    // Strategic domain keywords
    if (
      lower.includes('space') ||
      lower.includes('satellite') ||
      lower.includes('agni') ||
      lower.includes('icbm') ||
      lower.includes('nuclear') ||
      lower.includes('drdo') ||
      lower.includes('isro') ||
      lower.includes('hypersonic') ||
      lower.includes('bmd') ||
      lower.includes('ballistic') ||
      lower.includes('cyber')
    ) {
      return 'STRATEGIC';
    }

    // Navy domain keywords
    if (
      lower.includes('navy') ||
      lower.includes('naval') ||
      lower.includes('submarine') ||
      lower.includes('warship') ||
      lower.includes('frigate') ||
      lower.includes('destroyer') ||
      lower.includes('carrier') ||
      lower.includes('vikrant') ||
      lower.includes('ins ') ||
      lower.includes('torpedo') ||
      lower.includes('sonar') ||
      lower.includes('maritime')
    ) {
      return 'NAVY';
    }

    // Land domain keywords
    if (
      lower.includes('army') ||
      lower.includes('tank') ||
      lower.includes('zorawar') ||
      lower.includes('t-90') ||
      lower.includes('artillery') ||
      lower.includes('howitzer') ||
      lower.includes('atags') ||
      lower.includes('k9') ||
      lower.includes('pinaka') ||
      lower.includes('akashteer') ||
      lower.includes('infantry') ||
      lower.includes('ifv') ||
      lower.includes('ficv') ||
      lower.includes('armoured') ||
      lower.includes('btr')
    ) {
      return 'LAND';
    }

    // Air domain default for aviation & defense aerospace
    return 'AIR';
  }

  private inferEventType(text: string): LiveSitrepItem['eventType'] {
    const lower = text.toLowerCase();
    if (lower.includes('test') || lower.includes('trial') || lower.includes('firing') || lower.includes('drill') || lower.includes('tested')) {
      return 'TEST_FLIGHT';
    }
    if (lower.includes('commissioned') || lower.includes('inducted') || lower.includes('induction')) {
      return 'COMMISSIONED';
    }
    if (lower.includes('delivered') || lower.includes('delivery') || lower.includes('handed over') || lower.includes('rollout')) {
      return 'DELIVERED';
    }
    if (lower.includes('order') || lower.includes('contract') || lower.includes('deal') || lower.includes('procure') || lower.includes('rfp') || lower.includes('acquire')) {
      return 'ON_ORDER';
    }
    if (lower.includes('upgrade') || lower.includes('moderniz') || lower.includes('engine') || lower.includes('radar') || lower.includes('plans') || lower.includes('design')) {
      return 'UPGRADE';
    }
    if (lower.includes('exercise') || lower.includes('wargame') || lower.includes('transfer')) {
      return 'TRANSFER';
    }
    if (lower.includes('shot down') || lower.includes('crash') || lower.includes('intercepted')) {
      return 'SHOT_DOWN';
    }
    return 'REPORT';
  }

  private inferCountry(text: string): { country: string; countryFlag: string } {
    const lower = text.toLowerCase();
    if (lower.includes('united states') || lower.includes('pentagon') || lower.includes('usaf') || lower.includes('us navy') || lower.includes('lockheed') || lower.includes('boeing')) {
      return { country: 'United States', countryFlag: '🇺🇸' };
    }
    if (lower.includes('russia') || lower.includes('sukhoi') || lower.includes('moscow') || lower.includes('vks')) {
      return { country: 'Russia', countryFlag: '🇷🇺' };
    }
    if (lower.includes('china') || lower.includes('plaaf') || lower.includes('plan') || lower.includes('beijing') || lower.includes('chengdu')) {
      return { country: 'China', countryFlag: '🇨🇳' };
    }
    if (lower.includes('france') || lower.includes('dassault') || lower.includes('rafale') || lower.includes('french')) {
      return { country: 'France', countryFlag: '🇫🇷' };
    }
    if (lower.includes('united kingdom') || lower.includes('britain') || lower.includes('royal air force') || lower.includes('raf ') || lower.includes('bae systems')) {
      return { country: 'United Kingdom', countryFlag: '🇬🇧' };
    }
    if (lower.includes('israel') || lower.includes('iaf ') || lower.includes('tel aviv') || lower.includes('elbit') || lower.includes('rafael')) {
      return { country: 'Israel', countryFlag: '🇮🇱' };
    }
    if (lower.includes('pakistan') || lower.includes('paf ') || lower.includes('islamabad')) {
      return { country: 'Pakistan', countryFlag: '🇵🇰' };
    }
    if (lower.includes('ukraine') || lower.includes('kyiv')) {
      return { country: 'Ukraine', countryFlag: '🇺🇦' };
    }
    if (lower.includes('turkey') || lower.includes('turkish') || lower.includes('kaan') || lower.includes('baykar')) {
      return { country: 'Turkey', countryFlag: '🇹🇷' };
    }
    if (lower.includes('japan') || lower.includes('jasdf') || lower.includes('tokyo')) {
      return { country: 'Japan', countryFlag: '🇯🇵' };
    }
    // Default for IDRW & Defence.in
    return { country: 'India', countryFlag: '🇮🇳' };
  }

  private extractEntityName(title: string): string {
    const knownEntities = [
      'Tejas Mk1A', 'Tejas Mk2', 'AMCA', 'TEDBF', 'Su-30MKI', 'Rafale', 'Rafale M',
      'Akashteer', 'Zorawar', 'ATAGS', 'Pinaka', 'S-400', 'Akash-NG', 'BrahMos', 'BrahMos-NG',
      'Astra Mk1', 'Astra Mk2', 'Astra Mk3', 'LCH Prachand', 'LUH', 'ALH Dhruv', 'Rudra',
      'INS Vikrant', 'INS Arighat', 'Project 75I', 'Scorpene', 'Agni-V', 'Agni-Prime',
      'P-8I Neptune', 'C-295', 'MQ-9B SeaGuardian', 'F-35 Lightning II', 'F-21', 'F-15EX',
      'HAL', 'DRDO', 'IAF', 'Indian Navy', 'Indian Army'
    ];

    for (const entity of knownEntities) {
      if (new RegExp(`\\b${entity}\\b`, 'i').test(title)) {
        return entity;
      }
    }

    // Fallback: extract first 3-5 salient words
    const words = title.split(' ').slice(0, 4).join(' ');
    return words || 'Strategic Asset';
  }

  private parseRssXml(xml: string, sourceName: string, sourceTag: 'IDRW' | 'DEFENCE_IN'): LiveSitrepItem[] {
    const items: LiveSitrepItem[] = [];
    const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || [];

    for (let i = 0; i < itemMatches.length; i++) {
      const rawItem = itemMatches[i];

      const titleMatch = rawItem.match(/<title>([\s\S]*?)<\/title>/i);
      const linkMatch = rawItem.match(/<link>([\s\S]*?)<\/link>/i);
      const pubDateMatch = rawItem.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
      const descMatch = rawItem.match(/<description>([\s\S]*?)<\/description>/i) || rawItem.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/i);
      const guidMatch = rawItem.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i);
      const authorMatch = rawItem.match(/<dc:creator>([\s\S]*?)<\/dc:creator>/i) || rawItem.match(/<author>([\s\S]*?)<\/author>/i);

      if (!titleMatch || !linkMatch) continue;

      const title = this.decodeHtml(titleMatch[1]);
      const link = this.decodeHtml(linkMatch[1]);
      let description = descMatch ? this.decodeHtml(descMatch[1]) : '';
      // Clean leading boilerplate
      description = description.replace(/^This article was originally published on idrw\.org\.\s*/i, '');
      if (description.length > 280) {
        description = description.slice(0, 277) + '...';
      }
      if (!description) {
        description = title;
      }

      let eventDate: string;
      try {
        eventDate = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString();
      } catch {
        eventDate = new Date().toISOString();
      }

      const combinedText = `${title} ${description}`;
      const domain = this.inferDomain(combinedText);
      const eventType = this.inferEventType(title);
      const { country, countryFlag } = this.inferCountry(combinedText);
      const entityName = this.extractEntityName(title);
      const id = guidMatch ? this.decodeHtml(guidMatch[1]) : `${sourceTag.toLowerCase()}-${i}-${Date.now()}`;
      const author = authorMatch ? this.decodeHtml(authorMatch[1]).replace(/\(.*?\)/g, '').trim() : undefined;

      items.push({
        id,
        domain,
        eventType,
        country,
        countryFlag,
        entityName,
        location: country === 'India' ? 'Indian Defense Sector' : 'Global Theater',
        summary: description || title,
        eventDate,
        confidence: 'VERIFIED',
        sourceUrl: link,
        sourceName,
        sourceTag,
        author,
      });
    }

    return items;
  }

  private async fetchWithTimeout(url: string, timeoutMs = 4000): Promise<string> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'AeroVault-LiveSitrep/1.0 (Defense Intelligence OSINT Aggregator)',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      return await response.text();
    } finally {
      clearTimeout(timeoutId);
    }
  }

  public async getLiveFeeds(): Promise<LiveSitrepItem[]> {
    const now = Date.now();
    if (this.cache && (now - this.cache.timestamp < CACHE_TTL_MS)) {
      return this.cache.items;
    }

    if (this.isFetching && this.cache) {
      return this.cache.items;
    }

    this.isFetching = true;

    const feeds = [
      {
        url: 'https://idrw.org/feed/',
        name: 'IDRW.org (Indian Defence Research Wing)',
        tag: 'IDRW' as const,
      },
      {
        url: 'https://defence.in/feed/',
        name: 'Defence.in (Strategic & Military Community)',
        tag: 'DEFENCE_IN' as const,
      },
    ];

    const aggregatedItems: LiveSitrepItem[] = [];

    const results = await Promise.allSettled(
      feeds.map(async (feed) => {
        try {
          const xml = await this.fetchWithTimeout(feed.url, 4500);
          return this.parseRssXml(xml, feed.name, feed.tag);
        } catch (err: any) {
          logger.warn(`Failed to fetch RSS feed from ${feed.name}: ${err.message || err}`);
          return [];
        }
      })
    );

    for (const result of results) {
      if (result.status === 'fulfilled') {
        aggregatedItems.push(...result.value);
      }
    }

    this.isFetching = false;

    if (aggregatedItems.length > 0) {
      // Sort newest first
      aggregatedItems.sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());
      this.cache = {
        timestamp: now,
        items: aggregatedItems,
      };
      return aggregatedItems;
    }

    // If fetch failed completely, return previous cache if exists
    if (this.cache) {
      return this.cache.items;
    }

    return [];
  }
}

export const rssSitrepService = new RssSitrepService();
