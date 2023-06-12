import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-800">Interns Database</h1>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4">
        <Navbar />
        <MapComponent />
      </main>
    </div>
  );
}
