import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CatBreed = ({ name, description }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-700 mb-6">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
          independence, agility, and affectionate nature. Cats come in various breeds, each with unique characteristics
          and personalities.
        </p>
        <h2 className="text-2xl font-semibold mb-4">General Characteristics of Cats:</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Excellent hunters with sharp claws and teeth</li>
          <li>Flexible bodies and quick reflexes</li>
          <li>Keen senses, especially their night vision and hearing</li>
          <li>Independent nature, but can form strong bonds with humans</li>
          <li>Average lifespan of 12-18 years</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds:</h2>
        {catBreeds.map((breed, index) => (
          <CatBreed key={index} name={breed.name} description={breed.description} />
        ))}
      </div>
    </div>
  );
};

export default Index;
