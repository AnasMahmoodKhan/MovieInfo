import React from "react";
import { connect } from "react-redux";
import Search from "./Search";

const Landing = ({ loading }) => {
  return (
    <div className="container">
      <Search />
      {/* {loading ? <Spinner /> : <MoviesContainer />} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
