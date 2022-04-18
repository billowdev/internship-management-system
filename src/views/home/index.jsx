import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector, useState } from "react-redux";
import { getUsers } from "../../application/selectors/users";
import { loadUsers } from "../../application/actions/users";

import { pageLoaded } from '../../application/actions/ui';
import { getLoading } from '../../application/selectors/ui';

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUsers);
  useEffect(() => {
    dispatch(loadUsers);
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <Layout>
      <p>{userData&&userData.map((data) => data?.stdId)}</p>
    </Layout>
  );
};

export default Home;
