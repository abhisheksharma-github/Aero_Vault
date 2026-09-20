export const openApiSpec = {
  openapi: '3.1.0',
  info: {
    title: 'AeroVault Defense Intelligence Platform API',
    version: '3.0.0',
    description: `
**AeroVault** provides real-time and analytical intelligence dossiers on combat aircraft, military branches, naval fleets, armored divisions, and sovereign defense capability profiles.

### Core Features
- **Tactical Valuation Rating (TVR)**: Multi-dimensional, deterministic capability scoring algorithm across kinetics, avionics, payload, survivability, range, modernization, and logistics.
- **Dual-Mode Repository Pattern**: Operates seamlessly over PostgreSQL with automatic zero-downtime fallback to the validated Open-Source Intelligence Vault.
- **Coverage Indexing**: Real-time evaluation of country data completeness across Air, Naval, and Land domains.
- **OSINT Provenance**: Full traceability with Tier-1 citations and change logs.
    `,
    contact: {
      name: 'AeroVault Engineering Team',
      url: 'https://github.com/abhisheksharma-github/Aero_Vault',
    },
    license: {
      name: 'MIT',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Primary API Gateway',
    },
  ],
  paths: {
    '/health/live': {
      get: {
        summary: 'Liveness Probe',
        description: 'Returns HTTP 200 if the Node.js API process is alive and accepting requests.',
        tags: ['Health & Telemetry'],
        responses: {
          '200': {
            description: 'Process is healthy',
          },
        },
      },
    },
    '/health/ready': {
      get: {
        summary: 'Readiness Probe',
        description: 'Probes PostgreSQL database connectivity. Returns 200 when connected to PostgreSQL, or 503 when operating in local vault fallback mode.',
        tags: ['Health & Telemetry'],
        responses: {
          '200': { description: 'Database connected and ready' },
          '503': { description: 'Database probe failed; operating on vault fallback' },
        },
      },
    },
    '/aircraft': {
      get: {
        summary: 'List Aircraft',
        description: 'Retrieve paginated military aircraft dossiers with multi-attribute filtering, full-text search, and TVR sorting.',
        tags: ['Aircraft Intelligence'],
        parameters: [
          { name: 'country', in: 'query', schema: { type: 'string' }, description: 'Filter by operator or origin country' },
          { name: 'militaryBranch', in: 'query', schema: { type: 'string', enum: ['AIR_FORCE', 'ARMY_AVIATION', 'NAVAL_AVIATION', 'MARINE_AVIATION', 'JOINT'] } },
          { name: 'category', in: 'query', schema: { type: 'string' } },
          { name: 'generation', in: 'query', schema: { type: 'string', enum: ['GEN_3', 'GEN_4', 'GEN_4_5', 'GEN_5', 'GEN_6'] } },
          { name: 'search', in: 'query', schema: { type: 'string' }, description: 'Search name, designation, manufacturer, and aliases' },
          { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
          { name: 'limit', in: 'query', schema: { type: 'integer', default: 24, maximum: 100 } },
          { name: 'sortBy', in: 'query', schema: { type: 'string', default: 'tvrScore' } },
          { name: 'sortOrder', in: 'query', schema: { type: 'string', enum: ['asc', 'desc'], default: 'desc' } },
        ],
        responses: {
          '200': {
            description: 'Successful aircraft retrieval',
            headers: {
              'X-AeroVault-Source': {
                schema: { type: 'string', enum: ['postgres', 'vault'] },
                description: 'Active data source backing the query',
              },
            },
          },
        },
      },
      post: {
        summary: 'Register New Aircraft Record',
        description: 'Creates a new verified combat aircraft entry in the database/vault. Requires admin API key.',
        tags: ['Aircraft Intelligence'],
        security: [{ AdminKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'manufacturer', 'originCountry', 'country', 'affiliation', 'category', 'role', 'engineModel', 'description', 'imageUrl'],
                properties: {
                  name: { type: 'string' },
                  manufacturer: { type: 'string' },
                  originCountry: { type: 'string' },
                  country: { type: 'string' },
                  affiliation: { type: 'string' },
                  category: { type: 'string' },
                  generation: { type: 'string', default: 'GEN_4' },
                  role: { type: 'string' },
                  engineModel: { type: 'string' },
                  description: { type: 'string', minLength: 10 },
                  imageUrl: { type: 'string', format: 'uri' },
                },
              },
            },
          },
        },
        responses: {
          '201': { description: 'Aircraft successfully created' },
          '401': { description: 'Admin API key required' },
          '403': { description: 'Invalid Admin API key' },
        },
      },
    },
    '/aircraft/{id}': {
      get: {
        summary: 'Get Aircraft Dossier by ID or Alias',
        description: 'Fetches comprehensive specifications, weapons integration, kinematics, and sensors.',
        tags: ['Aircraft Intelligence'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' }, description: 'Unique aircraft ID (UUID or slug) or canonical alias' },
        ],
        responses: {
          '200': { description: 'Complete aircraft specs' },
          '404': { description: 'Aircraft not found' },
        },
      },
    },
    '/aircraft/{id}/tvr': {
      get: {
        summary: 'Get TVR Capability Breakdown',
        description: 'Calculates dynamic 7-dimension Tactical Valuation Rating and explains strengths & limitations.',
        tags: ['Aircraft Intelligence'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: {
          '200': { description: 'TVR rating breakdown' },
        },
      },
    },
    '/rankings/countries': {
      get: {
        summary: 'Get Global Military Power Rankings (ATLAS)',
        description: 'Retrieves multi-domain country rankings across Air (AIRS), Naval (SEAS), and Land (ARMS) metrics with data coverage indicators.',
        tags: ['Multi-Domain Intelligence'],
        parameters: [
          { name: 'sortBy', in: 'query', schema: { type: 'string', default: 'atlasIndex' } },
          { name: 'order', in: 'query', schema: { type: 'string', enum: ['asc', 'desc'], default: 'desc' } },
          { name: 'limit', in: 'query', schema: { type: 'integer' } },
        ],
        responses: {
          '200': { description: 'Ranked country force profiles with coverage metadata' },
        },
      },
    },
    '/countries': {
      get: {
        summary: 'List Sovereign Countries',
        description: 'Returns all monitored nations with defense budgets, personnel, alliances, and coverage metadata.',
        tags: ['Sovereign Nations'],
        responses: {
          '200': { description: 'List of sovereign nation dossiers' },
        },
      },
    },
    '/countries/{id}/inventory': {
      get: {
        summary: 'Get Multi-Domain Country Force Inventory',
        description: 'Returns combined airfleet, naval warships, and armored vehicles for a given sovereign nation.',
        tags: ['Sovereign Nations'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' }, description: 'Country name or 3-letter ISO code' },
        ],
        responses: {
          '200': { description: 'Complete sovereign inventory' },
        },
      },
    },
    '/naval/vessels': {
      get: {
        summary: 'List Naval Warships',
        description: 'Fetches aircraft carriers, destroyers, frigates, and submarines.',
        tags: ['Multi-Domain Intelligence'],
        responses: {
          '200': { description: 'List of naval vessels' },
        },
      },
    },
    '/land/vehicles': {
      get: {
        summary: 'List Ground Armor & Vehicles',
        description: 'Fetches main battle tanks (MBTs), IFVs, APCs, and self-propelled artillery.',
        tags: ['Multi-Domain Intelligence'],
        responses: {
          '200': { description: 'List of armored vehicles' },
        },
      },
    },
    '/weapons': {
      get: {
        summary: 'List Tactical Weapons & Ordnance',
        description: 'Fetches air-to-air missiles, precision-guided munitions, and cruise missiles.',
        tags: ['Weapons & Ordnance'],
        responses: {
          '200': { description: 'List of weapon systems' },
        },
      },
    },
    '/intelligence/compare': {
      get: {
        summary: 'Compare Combat Platforms Head-to-Head',
        description: 'Computes analytical dimension matrix comparison and mission scenario advantages (BVR, Carrier Ops, Strike).',
        tags: ['Tactical Benchmark'],
        parameters: [
          { name: 'aircraftA', in: 'query', required: true, schema: { type: 'string' } },
          { name: 'aircraftB', in: 'query', required: true, schema: { type: 'string' } },
        ],
        responses: {
          '200': { description: 'Comparative tactical assessment' },
        },
      },
    },
    '/osint/quality': {
      get: {
        summary: 'OSINT Data Quality & Verification Audit',
        description: 'Returns integrity health indices, citation coverage, and verification breakdown.',
        tags: ['OSINT & Quality'],
        responses: {
          '200': { description: 'Quality audit metrics' },
        },
      },
    },
    '/osint/changes': {
      get: {
        summary: 'Historical Intelligence Change Log',
        description: 'Returns chronological log of military inductions, retirements, and specification updates.',
        tags: ['OSINT & Quality'],
        responses: {
          '200': { description: 'Recent data changes' },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      AdminKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-Admin-Key',
        description: 'Cryptographic Admin Key for write and mutation operations',
      },
    },
  },
};
