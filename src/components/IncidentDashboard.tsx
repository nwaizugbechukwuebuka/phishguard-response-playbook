import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, Clock, FileText, Search, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface IncidentStatus {
  phase: "detected" | "contained" | "eradicated" | "recovered";
  timestamp: string;
  description: string;
}

const IncidentDashboard = () => {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  
  const incidentPhases: IncidentStatus[] = [
    {
      phase: "detected",
      timestamp: "2024-01-15 14:23:17 UTC",
      description: "Phishing email campaign detected by email gateway. Multiple users targeted."
    },
    {
      phase: "contained",
      timestamp: "2024-01-15 14:45:32 UTC", 
      description: "Compromised accounts identified and temporarily disabled. Malicious IPs blocked."
    },
    {
      phase: "eradicated",
      timestamp: "2024-01-15 15:12:08 UTC",
      description: "Phishing infrastructure taken down. All malicious emails quarantined."
    },
    {
      phase: "recovered",
      timestamp: "2024-01-15 16:30:45 UTC",
      description: "Systems restored. User accounts reactivated with mandatory password reset."
    }
  ];

  const phaseColors = {
    detected: "status-detected",
    contained: "status-contained", 
    eradicated: "status-eradicated",
    recovered: "status-recovered"
  };

  const phaseIcons = {
    detected: AlertTriangle,
    contained: Shield,
    eradicated: Activity,
    recovered: CheckCircle
  };

  const progressPercentage = ((currentPhase + 1) / incidentPhases.length) * 100;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Phishing Incident Response Lab
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive simulation of a phishing attack incident response from detection to recovery.
            Learn SOC procedures, log analysis, and threat mitigation in a controlled environment.
          </p>
        </div>

        {/* Incident Status Timeline */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Incident Response Timeline
            </CardTitle>
            <CardDescription>
              Track the progression through the four phases of incident response
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {incidentPhases.map((phase, index) => {
                const Icon = phaseIcons[phase.phase];
                const isActive = index <= currentPhase;
                const isCurrent = index === currentPhase;
                
                return (
                  <Card 
                    key={phase.phase}
                    className={`border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                      isCurrent 
                        ? `border-${phaseColors[phase.phase]} shadow-lg` 
                        : isActive 
                          ? "border-success/50 bg-success/5" 
                          : "border-muted opacity-60"
                    }`}
                    onClick={() => setCurrentPhase(index)}
                  >
                    <CardContent className="p-4 text-center space-y-3">
                      <div className="flex justify-center">
                        <Icon 
                          className={`h-8 w-8 ${
                            isCurrent 
                              ? `text-${phaseColors[phase.phase]}` 
                              : isActive 
                                ? "text-success" 
                                : "text-muted-foreground"
                          }`} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold capitalize">{phase.phase}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {phase.timestamp}
                        </p>
                      </div>
                      <Badge 
                        variant={isCurrent ? "default" : isActive ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {isCurrent ? "Current" : isActive ? "Complete" : "Pending"}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <h4 className="font-semibold mb-2">Current Phase Details</h4>
              <p className="text-sm text-muted-foreground">
                {incidentPhases[currentPhase].description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="response">Response</TabsTrigger>
            <TabsTrigger value="playbooks">Playbooks</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Threat Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-threat-critical" />
                    Threat Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Threat Level</span>
                      <Badge variant="destructive">CRITICAL</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Attack Vector</span>
                      <span className="text-sm font-medium">Phishing Email</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Targets</span>
                      <span className="text-sm font-medium">47 Employees</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Compromised</span>
                      <span className="text-sm font-medium text-threat-critical">3 Accounts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Affected Systems */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-threat-medium" />
                    Affected Systems
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Email Gateway</span>
                    <Badge variant="outline" className="border-threat-medium text-threat-medium">
                      MONITORING
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Azure AD/Entra</span>
                    <Badge variant="outline" className="border-threat-high text-threat-high">
                      AFFECTED
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Endpoints</span>
                    <Badge variant="outline" className="border-success text-success">
                      SECURE
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Email Logs
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Activity className="h-4 w-4 mr-2" />
                    Analyze IOCs
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Shield className="h-4 w-4 mr-2" />
                    Execute Playbook
                  </Button>
                  <Button className="w-full justify-start" size="sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>Log Analysis Interface</CardTitle>
                <CardDescription>
                  Examine email gateway, endpoint, and identity provider logs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Email Gateway Logs</h4>
                      <p className="text-sm text-muted-foreground mb-3">47 suspicious emails detected</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Logs
                      </Button>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Azure AD Sign-ins</h4>
                      <p className="text-sm text-muted-foreground mb-3">12 anomalous login attempts</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Logs
                      </Button>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Endpoint Alerts</h4>
                      <p className="text-sm text-muted-foreground mb-3">5 suspicious processes detected</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Logs
                      </Button>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle>Attack Analysis & Timeline</CardTitle>
                <CardDescription>
                  Reconstruct the attack chain and extract indicators of compromise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <Activity className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Attack Timeline Reconstruction</h3>
                    <p className="text-muted-foreground mb-4">
                      Analyze the phishing campaign timeline and extract IOCs
                    </p>
                    <Button>
                      Start Analysis
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="response">
            <Card>
              <CardHeader>
                <CardTitle>Incident Response Actions</CardTitle>
                <CardDescription>
                  Execute containment, eradication, and recovery procedures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Response Procedures</h3>
                    <p className="text-muted-foreground mb-4">
                      Follow SOC playbooks to contain and mitigate the threat
                    </p>
                    <Button>
                      Execute Response
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="playbooks">
            <Card>
              <CardHeader>
                <CardTitle>Incident Response Playbooks</CardTitle>
                <CardDescription>
                  Standard operating procedures for phishing incidents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">SOC Playbooks</h3>
                    <p className="text-muted-foreground mb-4">
                      Access standardized response procedures and best practices
                    </p>
                    <Button>
                      View Playbooks
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Incident Reports & Documentation</CardTitle>
                <CardDescription>
                  Generate comprehensive incident reports and lessons learned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Final Documentation</h3>
                    <p className="text-muted-foreground mb-4">
                      Create detailed incident reports and document lessons learned
                    </p>
                    <Button>
                      Generate Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IncidentDashboard;