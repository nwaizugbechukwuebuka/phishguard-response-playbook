# Phishing Incident Response Simulation Lab

📌 **Overview**

This project simulates a phishing attack and documents the incident response lifecycle from detection to recovery. The lab environment demonstrates how a SOC team investigates and mitigates phishing-related threats in a real-world setting.

The project includes:

- Phishing campaign simulation with Gophish
- Log collection from email gateway, endpoints, and identity provider (Azure AD/Entra)
- Attack timeline reconstruction & IOC extraction
- Incident response playbooks (containment, eradication, recovery)
- Final SOC-style incident report

🎯 **Objectives**

- Simulate a phishing campaign targeting test users.
- Detect abnormal activities via log analysis.
- Reconstruct the phishing attack chain with IOCs.
- Apply containment, eradication, and recovery steps.
- Document the full response and lessons learned.

🏗️ **Project Structure**
```
Phishing-Incident-Response-Lab/
│
├── README.md                    # Project documentation
├── architecture/                # Attack flow diagrams
│   └── phishing_incident_flow.png
│
├── setup/                       # Setup guides
│   ├── gophish-setup.md         # Phishing simulation setup
│   ├── o365-log-export.md       # Exporting Office 365 / Entra logs
│   └── sysmon-config.xml        # Sysmon config for endpoint logging
│
├── logs/                        # Simulated log sources
│   ├── email-gateway-logs.csv
│   ├── endpoint-alerts.json
│   └── azure-ad-signins.json
│
├── analysis/                    # Attack analysis & timeline
│   ├── phishing_attack_timeline.md
│   ├── attacker_IOCs.md
│   └── compromised_accounts.md
│
├── response/                    # Incident response actions
│   ├── containment_steps.md
│   ├── eradication_procedures.md
│   └── recovery_actions.md
│
├── playbooks/                   # Response playbooks
│   └── phishing_response_playbook.md
│
└── reports/                     # SOC report and lessons learned
    ├── phishing_incident_report.pdf
    └── lessons_learned.md
```

🛠️ **Tools & Technologies**

- **Phishing Simulation**: Gophish
- **Log Collection**: Microsoft Entra ID, Sysmon, Email Gateway logs
- **Analysis**: ELK Stack, Sigma rules, Splunk Free
- **Documentation**: Markdown playbooks, SOC incident reports

📚 **Methodology**

1. **Simulate Attack**: Launch phishing campaign via Gophish.
2. **Detect Activity**: Collect email gateway, endpoint, and identity logs.
3. **Analyze**: Reconstruct the attack chain & extract IOCs.
4. **Respond**: Execute containment, eradication, and recovery steps.
5. **Report**: Document SOC-style incident report and lessons learned.

🚀 **Getting Started**

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Phishing-Incident-Response-Lab.git
cd Phishing-Incident-Response-Lab
```

2. Follow the setup guides in `/setup` to deploy Gophish and configure log sources.

3. Run the phishing campaign and capture logs.

4. Document your analysis in `/analysis` and response actions in `/response`.

📄 **License**

This project is licensed under the MIT License