import React, { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../components";
import axios from "axios";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#ff6363] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/post", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const result = response.data;
          setAllPosts(result.data.reverse());
        } else {
          alert("Failed to fetch posts");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="text-center">
        <h1 className="font-extrabold text-[#222328] text-4xl">
          Pixel Palette
        </h1>
        <p className="mt-2 text-[#666e75] text-lg max-w-2xl mx-auto">
          A vibrant online gallery showcasing diverse modern art made with AI,
          connecting creativity with the digital age.
        </p>
      </div>

      <div className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search posts"
          value={searchText}
          handleChange={handleSearchChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for:
                <span className="text-[#222328]"> {searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No search results found"
                />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
