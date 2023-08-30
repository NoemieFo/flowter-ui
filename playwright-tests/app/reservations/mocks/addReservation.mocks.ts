export const getMotivesJsonResponse = {
  "@context": "/api/contexts/Motive",
  "@id": "/api/motives",
  "@type": "hydra:Collection",
  "hydra:totalItems": 3,
  "hydra:member": [
    {
      "@id": "/api/motives/1",
      "@type": "Motive",
      id: 1,
      label: "Rendez-vous fournisseur, partenaire...",
      rides: [],
    },
    {
      "@id": "/api/motives/2",
      "@type": "Motive",
      id: 2,
      label: "Rendez-vous sur un autre site",
      rides: [],
    },
    {
      "@id": "/api/motives/3",
      "@type": "Motive",
      id: 3,
      label: "Rendez-vous entretien d\u0027un véhicule",
      rides: [],
    },
  ],
};
