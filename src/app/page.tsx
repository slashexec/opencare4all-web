import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { 
  Building2, 
  Target, 
  Users, 
  Wrench, 
  Shield, 
  BarChart3,
  HeartHandshake,
  Stethoscope,
  Activity
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <ThemeToggle />

      {/* Hero Section avec gradient médical */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 dark:from-blue-400/10 dark:to-green-400/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center mb-16">
            {/* Logo/Icon médical avec animations simplifiées */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                {/* Container principal avec hover effect */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl">
                  {/* Stéthoscope avec animation de balancement */}
                  <Stethoscope className="w-12 h-12 text-white transition-transform duration-1000 group-hover:rotate-6 animate-pulse" />
                </div>
                
                {/* Badge cœur animé */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 animate-bounce">
                  <HeartHandshake className="w-4 h-4 text-white transition-transform duration-500 group-hover:rotate-12" />
                  
                  {/* Effet de battement de cœur */}
                  <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Cabinet Médical
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Santé et Travail</span>
              <br />
              <span className="text-3xl font-medium text-gray-600 dark:text-gray-400">Pour Tous</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plateforme de nouvelle génération pour la médecine du travail. 
              Technologie avancée, soins personnalisés, et excellence médicale 
              au service de la santé professionnelle.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg">
                <Link href="/auth/login" className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Commencer
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-blue-200 hover:bg-blue-50 dark:border-blue-600 dark:hover:bg-blue-900/20 px-8 py-3 rounded-xl">
                <Link href="/dashboard">Voir le tableau de bord</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid - Premium Medical */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block">Organisations</span>
                  <span className="text-sm text-blue-600 font-normal">Gestion Enterprise</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Gestion complète des organisations avec suivi des adresses et associations de campagnes. 
                Interface intuitive pour les professionnels de santé.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block">Campagnes</span>
                  <span className="text-sm text-green-600 font-normal">Médecine Préventive</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Planification intelligente des campagnes de prévention. 
                Suivi en temps réel et reporting automatisé pour une médecine du travail efficace.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block">Employés</span>
                  <span className="text-sm text-purple-600 font-normal">Dossiers FHIR</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dossiers médicaux sécurisés conformes FHIR. 
                Intégration OpenMRS pour une continuité des soins optimale.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block">Postes de travail</span>
                  <span className="text-sm text-orange-600 font-normal">Évaluation Risques</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Analyse approfondie des environnements professionnels. 
                Prévention active des risques pour la santé au travail.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block">Sécurité</span>
                  <span className="text-sm text-red-600 font-normal">Conformité Médicale</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sécurité de niveau hospitalier. 
                Authentification JWT et conformité RGPD pour protéger les données de santé.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="block">Analyses</span>
                  <span className="text-sm text-indigo-600 font-normal">Intelligence Médicale</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Analyses prédictives et rapports intelligents. 
                Tableaux de bord médicaux pour une prise de décision éclairée.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Status Section - Premium */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">État du système</h2>
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm">
              ✨ API Backend prête
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-900 dark:text-blue-200 px-4 py-2 text-sm">
              🚀 Frontend en développement
            </Badge>
            <Badge variant="outline" className="border-2 border-purple-200 text-purple-700 dark:border-purple-600 dark:text-purple-300 px-4 py-2 text-sm">
              🏥 Compatible FHIR
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}