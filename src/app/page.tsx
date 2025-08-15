import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Cabinet Médical
          <br />
          <span className="text-blue-600">Santé et Travail</span>
          <br />
          <span className="text-2xl font-medium text-gray-700">Pour Tous</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Plateforme moderne de gestion de la santé au travail pour les campagnes médicales, 
          le suivi de la santé des employés et les programmes de bien-être au travail.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/auth/login">Commencer</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/dashboard">Voir le tableau de bord</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🏢</span>
              Organisations
            </CardTitle>
            <CardDescription>
              Gérer les profils d'entreprise et les structures organisationnelles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Gestion complète des organisations avec suivi des adresses et associations de campagnes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🎯</span>
              Campagnes
            </CardTitle>
            <CardDescription>
              Planifier et exécuter des campagnes de santé médicale
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Créer des campagnes de santé limitées dans le temps avec affectation d'employés et suivi des progrès.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>👥</span>
              Employés
            </CardTitle>
            <CardDescription>
              Suivre la santé des employés et les dossiers médicaux
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Dossiers de santé des employés conformes FHIR avec intégration OpenMRS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🔧</span>
              Postes de travail
            </CardTitle>
            <CardDescription>
              Gérer les environnements de travail et les risques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Suivre les risques professionnels et les conditions de travail pour la santé au travail.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🔒</span>
              Sécurité
            </CardTitle>
            <CardDescription>
              Sécurité et conformité de niveau entreprise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Authentification JWT, contrôle d'accès basé sur les rôles et conformité FHIR.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>📊</span>
              Analyses
            </CardTitle>
            <CardDescription>
              Analyses de santé et rapports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Bientôt disponible : analyses avancées et rapports de tendances de santé.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Status Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">État du système</h2>
        <div className="flex gap-2 justify-center flex-wrap">
          <Badge variant="default">API Backend prête</Badge>
          <Badge variant="secondary">Frontend en développement</Badge>
          <Badge variant="outline">Compatible FHIR</Badge>
        </div>
      </div>
    </div>
  );
}
