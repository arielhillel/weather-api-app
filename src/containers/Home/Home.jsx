import "./Home.css";
import { Search } from "../../components/Search/Search";
import { Result } from "../../components/Result/Result";
import { useState } from "react";
import History from "../History/History";

const Home = () => {
  const [runHttpFlag, setRunHttpFlag] = useState(false);
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <Search
        setRefresh={setRefresh}
        refresh={refresh}
        runHttpFlag={runHttpFlag}
        setRunHttpFlag={setRunHttpFlag}
        className="content"
      />
      <Result />
      <History />
    </div>
  );
};

export default Home;
