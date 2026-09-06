# AeroVault — True Value Rating (TVR) Methodology

## 1. Abstract & Mathematical Model

The **True Value Rating (TVR)** is a normalized, deterministic scoring model (0.0 to 100.0) that quantifies the real-world operational combat effectiveness of military airframes. Rather than relying solely on top speed or raw thrust, TVR integrates multi-spectral sensors, electronic warfare self-protection, payload standoff range, and mission-availability reliability.

$$\text{TVR}_{\text{base}} = \sum_{i=1}^{7} \left( W_{i, \text{role}} \times S_i \right)$$

$$\text{TVR}_{\text{final}} = \text{TVR}_{\text{base}} \times M_{\text{stealth}} \times M_{\text{reliability}}$$

---

## 2. Seven Capability Pillars ($S_i$)

| Pillar | Metric Drivers | Max Score |
| :--- | :--- | :--- |
| **1. Kinetics & Dynamics** | Top Mach speed, rate of climb (m/s), instantaneous/sustained G-limits, thrust-to-weight ratio. | 100.0 |
| **2. Avionics & Sensors** | Radar type (AESA, PESA, Mechanical), air-to-air tracking range, sensor fusion, IRST, and Link-16/MADL secure datalinks. | 100.0 |
| **3. Weapons & Payload** | Hardpoint capacity, maximum payload weight (kg), BVR ramjet/active radar integration, and standoff cruise missiles. | 100.0 |
| **4. Survivability & Stealth** | Radar cross-section (RCS in $\text{m}^2$), digital RWR, active ECM jammer, and missile approach warning (MAWS). | 100.0 |
| **5. Operational Combat Radius** | Unrefueled combat radius (km) and ferry range calibrated to airframe role category. | 100.0 |
| **6. Generation & Modernization** | 4th, 4.5, or 5th-generation avionics architecture, modular mission computers, and open systems architecture (OMS). | 100.0 |
| **7. Fleet Logistics & Reliability** | Maintenance man-hours per flight hour (MMH/FH) and operational squadron availability rate. | 100.0 |

---

## 3. Dynamic Role-Weight Profiles ($W_{i, \text{role}}$)

Weights automatically adjust depending on the operational purpose of the aircraft:

| Role Profile | Kinetics | Avionics | Weapons | Survivability | Range | Modernization | Logistics |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Air Superiority / Fighter** | 22% | 22% | 20% | 16% | 8% | 7% | 5% |
| **Strategic Bomber** | 8% | 18% | 28% | 14% | 20% | 7% | 5% |
| **Attack Helicopter** | 12% | 20% | 26% | 16% | 10% | 8% | 8% |
| **AEW&C / Airborne Radar** | 6% | 40% | 0% | 14% | 20% | 12% | 8% |
| **Aerial Tanker** | 6% | 14% | 0% | 10% | 45% | 10% | 15% |
| **MALE / HALE UAV** | 8% | 30% | 20% | 12% | 18% | 7% | 5% |

---

## 4. Grade Classifications

- **S+ Tier (94.0 – 100.0):** World-leading 5th-generation stealth platforms (*F-22A*, *F-35*, *J-20A*).
- **S Tier (88.0 – 93.9):** Premier 4.5-generation omnirole fighters (*Rafale F3-R*, *Su-30MKI*, *Eurofighter Typhoon*).
- **A+ Tier (80.0 – 87.9):** Modernized 4th-generation multirole platforms (*Tejas Mk1A*, *F/A-18E/F*, *J-15T*).
- **A Tier (70.0 – 79.9):** Standard frontline tactical combat platforms.
- **B / C Tier (< 70.0):** Legacy or specialized trainers.
