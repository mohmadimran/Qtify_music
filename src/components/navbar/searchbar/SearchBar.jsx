import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper}>
        <div>
          <input name="album" placeholder="Search a album of your choice" className={styles.search} />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
