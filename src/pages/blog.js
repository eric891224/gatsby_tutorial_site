import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle='my blog posts'>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage;