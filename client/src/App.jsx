import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OverviewDashboard from './components/OverviewDashboard';
import InventoryGrid from './components/InventoryGrid';
import BranchFleetView from './components/BranchFleetView';
import IntelligenceOverview from './components/IntelligenceOverview';
import GlobalAirForcesView from './components/GlobalAirForcesView';
import TimelineView from './components/TimelineView';
import ReportsView from './components/ReportsView';
import SourcesView from './components/SourcesView';
import DataQualityView from './components/DataQualityView';
import CountryRankingsView from './views/CountryRankingsView';
import NavalFleetView from './views/NavalFleetView';
import LandFleetView from './views/LandFleetView';
import CountryExplorerView from './views/CountryExplorerView';
import AircraftDirectoryView from './views/AircraftDirectoryView';
import SitrepWidget from './components/SitrepWidget';
import ComparisonModal from './components/ComparisonModal';
import AircraftDetailModal from './components/AircraftDetailModal';
import CommandPalette from './components/CommandPalette';
import ErrorBoundary from './components/ErrorBoundary';
import { apiService } from './services/api';
import { initialAircraftData, initialNationIntelligence } from './data/mockData';
import { Shield, RefreshCw, Layers } from 'lucide-react';
import { tacticalAudio } from './services/tacticalAudio';


export default function App() {
  // Navigation View State
  const [activeTab, setActiveTab] = useState('overview');

  // Data & Loading States
  const [aircraftList, setAircraftList] = useState(initialAircraftData);
  const [nationsData, setNationsData] = useState(initialNationIntelligence);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState('offline-vault');

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [selectedAffiliation, setSelectedAffiliation] = useState('ALL');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [selectedEra, setSelectedEra] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedGeneration, setSelectedGeneration] = useState('ALL');
  const [sortBy, setSortBy] = useState('tvrScore');
  const [sortOrder, setSortOrder] = useState('desc');

  // Modals & Command Palette State
  const [selectedAircraftForModal, setSelectedAircraftForModal] = useState(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [comparisonList, setComparisonList] = useState([
    initialAircraftData[0], // Su-30MKI
    initialAircraftData[9] || initialAircraftData[1]  // F-22A Raptor / Rafale
  ]);

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch aircraft and intelligence on mount and filter changes
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      try {
        const [aircraftRes, intelRes] = await Promise.all([
          apiService.getAircraft({
            country: selectedCountry,
            affiliation: selectedAffiliation,
            militaryBranch: selectedBranch,
            serviceStatus: selectedStatus,
            era: selectedEra,
            category: selectedCategory,
            generation: selectedGeneration,
            search: searchQuery,
            sortBy,
            sortOrder,
          }),
          apiService.getIntelligence(),
        ]);

        if (isMounted) {
          setAircraftList(aircraftRes.items);
          setNationsData(intelRes.rankings);
          setDataSource(aircraftRes.source);
        }
      } catch (err) {
        console.error('Failed fetching telemetry data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, [selectedCountry, selectedAffiliation, selectedBranch, selectedStatus, selectedEra, selectedCategory, selectedGeneration, searchQuery, sortBy, sortOrder]);

  // Toggle Aircraft into Comparison Dock (Max 2)
  const handleToggleCompare = useCallback((aircraft) => {
    setComparisonList((prev) => {
      const exists = prev.some((item) => (item.id && item.id === aircraft.id) || item.name === aircraft.name);
      if (exists) {
        return prev.filter((item) => (item.id ? item.id !== aircraft.id : item.name !== aircraft.name));
      } else {
        if (prev.length >= 2) return [prev[0], aircraft];
        return [...prev, aircraft];
      }
    });
  }, []);

  const handleLaunchComparisonFromModal = useCallback((aircraft) => {
    setComparisonList((prev) => {
      if (!prev.some((a) => a.name === aircraft.name)) {
        return [aircraft, prev[0] || initialAircraftData[1]];
      }
      return prev;
    });
    setSelectedAircraftForModal(null);
    setIsComparisonOpen(true);
  }, []);

  const handleResetFilters = useCallback(() => {
    tacticalAudio.playClick();
    setSelectedCountry('ALL');
    setSelectedAffiliation('ALL');
    setSelectedBranch('ALL');
    setSelectedStatus('ALL');
    setSelectedEra('ALL');
    setSelectedCategory('ALL');
    setSelectedGeneration('ALL');
    setSearchQuery('');
  }, []);

  const handleCountryDrilldown = useCallback((countryName) => {
    tacticalAudio.playClick();
    setSelectedCountry(countryName);
    setActiveTab('directory');
  }, []);

  const handleSelectAircraft = useCallback((aircraft) => {
    setSelectedAircraftForModal(aircraft);
  }, []);


  return (
    <div className="min-h-screen bg-av-navy text-av-light flex flex-col font-sans radar-grid selection:bg-av-sky/20 selection:text-av-sky">
      
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        comparisonList={comparisonList}
        onOpenComparison={() => setIsComparisonOpen(true)}
        dataSource={dataSource}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Application Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start">
          
          {/* Persistent Tactical Navigation Sidebar */}
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            totalCount={aircraftList.length}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            onResetFilters={handleResetFilters}
          />

          {/* Dynamic Active View Panel */}
          <div className="flex-1 w-full min-w-0">
            <ErrorBoundary inline viewName={activeTab} key={activeTab}>
            {/* VIEW 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <OverviewDashboard
                aircraftList={aircraftList}
                nationsData={nationsData}
                onNavigateTab={(tab) => setActiveTab(tab)}
                onSelectCountry={handleCountryDrilldown}
                onSelectAircraft={handleSelectAircraft}
              />
            )}

            {/* VIEW 2: GLOBAL FLEET INVENTORY */}
            {activeTab === 'inventory' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h1 className="text-xl sm:text-3xl font-display font-black text-white flex items-center gap-2">
                      <span>Global Military Fleet Inventory</span>
                      {selectedCountry !== 'ALL' && (
                        <span className="text-xs font-mono font-bold text-av-sky px-2.5 py-0.5 rounded-lg bg-av-sky/15 border border-av-sky/30">
                          {selectedCountry}
                        </span>
                      )}
                    </h1>
                    <p className="text-xs font-mono text-av-mist mt-1">
                      Displaying <strong className="text-av-sky">{aircraftList.length}</strong> combat and support airframes in vault
                    </p>
                  </div>

                  {(selectedCountry !== 'ALL' || selectedCategory !== 'ALL' || selectedGeneration !== 'ALL' || searchQuery) && (
                    <button
                      onClick={handleResetFilters}
                      className="text-xs font-mono text-av-mist hover:text-av-sky flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-av-blue/40 border border-av-steel/30 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset Filters</span>
                    </button>
                  )}
                </div>

                <InventoryGrid
                  aircraftList={aircraftList}
                  loading={loading}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                  selectedEra={selectedEra}
                  setSelectedEra={setSelectedEra}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedGeneration={selectedGeneration}
                  setSelectedGeneration={setSelectedGeneration}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
                  comparisonList={comparisonList}
                  onToggleCompare={handleToggleCompare}
                  onOpenComparison={() => setIsComparisonOpen(true)}
                  onClearFilters={handleResetFilters}
                />
              </div>
            )}

            {/* VIEW 3: AIR FORCE */}
            {activeTab === 'airforce' && (
              <BranchFleetView
                branchKey="AIR_FORCE"
                aircraftList={aircraftList}
                loading={loading}
                onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
                comparisonList={comparisonList}
                onToggleCompare={handleToggleCompare}
                onOpenComparison={() => setIsComparisonOpen(true)}
              />
            )}

            {/* VIEW 4: ARMY AVIATION */}
            {activeTab === 'army' && (
              <BranchFleetView
                branchKey="ARMY_AVIATION"
                aircraftList={aircraftList}
                loading={loading}
                onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
                comparisonList={comparisonList}
                onToggleCompare={handleToggleCompare}
                onOpenComparison={() => setIsComparisonOpen(true)}
              />
            )}

            {/* VIEW 5: NAVAL AVIATION */}
            {activeTab === 'navy' && (
              <BranchFleetView
                branchKey="NAVAL_AVIATION"
                aircraftList={aircraftList}
                loading={loading}
                onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
                comparisonList={comparisonList}
                onToggleCompare={handleToggleCompare}
                onOpenComparison={() => setIsComparisonOpen(true)}
              />
            )}

            {/* G20 INTELLIGENCE PLATFORM: SOVEREIGN COUNTRY EXPLORER */}
            {(activeTab === 'g20countries' || activeTab === 'countries') && (
              <CountryExplorerView
                onSelectCountry={handleCountryDrilldown}
                onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
              />
            )}

            {/* G20 INTELLIGENCE PLATFORM: AIRCRAFT DIRECTORY & SEARCH */}
            {(activeTab === 'directory' || activeTab === 'g20aircraft') && (
              <AircraftDirectoryView
                onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
                onToggleCompare={handleToggleCompare}
                comparedAircraft={comparisonList}
                onLaunchComparison={() => setIsComparisonOpen(true)}
                initialCountryFilter={selectedCountry}
              />
            )}

            {/* MULTI-DOMAIN VIEW: ATLAS 2026 GLOBAL POWER RANKINGS */}
            {activeTab === 'rankings' && (
              <CountryRankingsView
                onSelectCountry={handleCountryDrilldown}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}

            {/* MULTI-DOMAIN VIEW: NAVAL FORCES & CARRIER STRIKE */}
            {activeTab === 'naval' && (
              <NavalFleetView
                onSelectCountry={handleCountryDrilldown}
              />
            )}

            {/* MULTI-DOMAIN VIEW: ARMORED LAND FLEETS & GROUND FORCES */}
            {activeTab === 'land' && (
              <LandFleetView
                onSelectCountry={handleCountryDrilldown}
              />
            )}

            {/* MULTI-DOMAIN VIEW: LIVE SITREP DEFENSE FEED */}
            {activeTab === 'sitrep' && (
              <div className="space-y-6">
                <SitrepWidget compact={false} maxItems={25} />
              </div>
            )}

            {/* VIEW 6: NATIONS */}
            {activeTab === 'nations' && (
              <GlobalAirForcesView
                nations={nationsData}
                onSelectCountry={handleCountryDrilldown}
              />
            )}

            {/* VIEW 7: COMPARISON */}
            {activeTab === 'compare' && (
              <div className="space-y-6">
                <div className="glass-panel rounded-3xl p-8 border border-av-steel/40 text-center max-w-2xl mx-auto space-y-4 hud-corner-box">
                  <div className="w-16 h-16 rounded-2xl bg-av-sky/15 border border-av-sky/40 text-av-sky flex items-center justify-center mx-auto shadow-glow-cyan">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-display font-black text-white">Multi-Domain Tactical Benchmark Station</h2>
                  <p className="text-xs sm:text-sm text-av-light/80 font-sans leading-relaxed">
                    Compare airframes, specialized variants, and military branches side-by-side across 7 capability pillars and simulated combat scenarios (*BVR*, *SEAD*, *Carrier Ops*, *ASW*).
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        tacticalAudio.playLaunch();
                        setIsComparisonOpen(true);
                      }}
                      className="px-6 py-3 rounded-2xl text-xs font-mono font-bold bg-gradient-to-r from-av-sky to-cyan-400 text-av-navy shadow-glow-cyan hover:brightness-110 uppercase tracking-wider"
                    >
                      Launch Split-Screen Comparison Tool →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 8: TIMELINE */}
            {activeTab === 'timeline' && <TimelineView />}

            {/* VIEW 9: REPORTS */}
            {activeTab === 'reports' && <ReportsView nations={nationsData} />}

            {/* VIEW 10: SOURCES */}
            {activeTab === 'sources' && <SourcesView />}

            {/* VIEW 11: DATA QUALITY */}
            {activeTab === 'quality' && <DataQualityView />}
            </ErrorBoundary>
          </div>
        </div>
      </main>


      {/* Global Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        aircraftList={aircraftList}
        onSelectAircraft={(a) => setSelectedAircraftForModal(a)}
        onNavigateTab={(tab) => setActiveTab(tab)}
        onSelectCountry={handleCountryDrilldown}
      />

      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        aircraftA={comparisonList[0] || initialAircraftData[0]}
        aircraftB={comparisonList[1] || initialAircraftData[1]}
        allAircraft={aircraftList.length > 0 ? aircraftList : initialAircraftData}
        onSelectAircraftA={(a) => setComparisonList([a, comparisonList[1] || initialAircraftData[1]])}
        onSelectAircraftB={(b) => setComparisonList([comparisonList[0] || initialAircraftData[0], b])}
      />

      {/* Aircraft Detail Dossier Modal */}
      <AircraftDetailModal
        aircraft={selectedAircraftForModal}
        onClose={() => setSelectedAircraftForModal(null)}
        onToggleCompare={handleToggleCompare}
        isCompared={selectedAircraftForModal ? comparisonList.some((a) => a.id === selectedAircraftForModal.id || a.name === selectedAircraftForModal.name) : false}
        onLaunchComparison={handleLaunchComparisonFromModal}
      />

      {/* Footer */}
      <footer className="w-full border-t border-av-steel/20 bg-av-navy/95 py-6 mt-16 text-center text-xs font-mono text-av-mist">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-av-sky" />
            <span className="font-bold text-white font-display">AEROVAULT GLOBAL DEFENSE INTELLIGENCE</span>
          </div>
          <div>
            Analytical capability models calibrated to WDMMA & open-source defense standards.
          </div>
        </div>
      </footer>
    </div>
  );
}
