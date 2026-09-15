import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data loading failed");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch(() => {
        toast.error("Technology data load failed");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  const handleAdd = (technology: Technology) => {
    const exists = stack.some(
      (item) => item.id === technology.id
    );

    if (exists) {
      toast.warning(`${technology.name} is already added`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to stack`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));

    if (removed) {
      toast.info(`${removed.name} removed`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="container mx-auto px-4 py-10 md:px-8">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Explore the <span className="brand-text">Technologies</span>
            </h2>

            <p className="mt-2 text-xs text-slate-500 md:text-sm">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-pink-200 border-t-pink-500"></div>

              <p className="text-sm text-slate-500">
                Loading technologies...
              </p>
            </div>
          ) : technologies.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-slate-500">
              No technologies found.
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="mx-auto grid w-full max-w-lg grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    selected={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={handleAdd}
                  />
                ))}
              </div>

              <StackSidebar
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </>
  );
};

export default App;