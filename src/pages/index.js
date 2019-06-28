import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import {Cell, Grid, Row} from '@material/react-layout-grid';

export const STARSHIP_QUERY = graphql`
    {
      swapi {
      Starship(name: "Millennium Falcon") {
        name
        hyperdriveRating
        pilots(orderBy: height_DESC) {
          id
          name
          height
          homeworld {
            name
          }
        }
      }
    }
  }
`

const APOLLO_QUERY = gql`
  {
    Starship(name: "Millennium Falcon") {
      name
      hyperdriveRating
      pilots(orderBy: height_DESC) {
        id
        name
        height
        homeworld {
          name
        }
      }
    }
  }
`;

const IndexPage = ({data : {swapi: {Starship: {name, hyperdriveRating, pilots}}}}) => {
  let pilotListItems = []
  pilots.map((p, i) => {
    pilotListItems.push(<li key={i}>{p.name}</li>)
    return
  });
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{name}</h1>
      <p>Hyperdrive Rating: {hyperdriveRating}</p>
      <ul>
        {pilotListItems}
      </ul>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading ship...</p>;
          if (error) return <p>Error: ${error.message}</p>;
          const Starship = data.Starship || {}
          return (<p>{Starship.name}</p>);
        }}
      </Query>
      <Link to="/auth/login/">Login</Link>
      <br />
      <Link to="/auth/register">Register</Link>

    </Layout>
  )
}

export default IndexPage
