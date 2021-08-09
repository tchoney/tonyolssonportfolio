import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Why i do what i do
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            
          </figure>
          <h3 id="dynamic-styles">For me,</h3>
          <p>
          design is all about rigour and discipline. Design is not merely the creation of form, patterns, structures, behaviour or function. It includes the skill to apply all of these things. Developing skills is something that takes dedication and time. The goal for me is perfection. Still, the more practice the more I learn and what has become clear to me is the value of compromise. Design is about framing experiences between people and products. With the best of our abilities, we can only guide and influence but never control the user. How they frame the final experience is still a subjective matter. Therefore it is impossible to reach a state of being complete and correct as people and their wishes, preferences and needs change over time. 
          So in a sense, I am pursuing a profession where I know my end goals can never be achieved. Living a paradox where every time I complete a project I  also gain insights that make me want to start all over again and make it better. 
          Some would consider this pursuit of perfection foolish or some might go so far as to consider it stupid. To do, what I know can't be done.  I guess that's why I call design a passion. The true love that can never be achieved. 
          </p>
          <p>
          Still, to find success in my profession I have found that the biggest insights I have into design are how to separate personal goals from the task at hand. Ux design is not about perfection, that said it does not mean that it needs to be bad. On the contrary, it is our job as digital designers to seek the best possible experience for all who are willing to invest their time into what we create. Therefore the art of compromise is vital to my process. I truly believe that we are the custodians of the sweet spot between what is viable, feasible and desirable. But we don't dictate, we need empathy and compassion to understand the impact of what we propose as solutions and whom we will affect.  
          </p>
          <p>
          This is what I love about design, taking on large responsibilities and including others in the decision-making process. To learn from others and share what I know to progress together. Refining the process is where the true skill lies. 
          </p>
          <p>
          Of late I have felt less of the need to be to one that implements design but I have acquired a growing urge to be the one that drives the design agenda. I find it very inspiring in helping others realise what potential design thinking hold and how good design is good business. For me design is disruption. If it is not it would just be the replication of something that already exists. And the best way to stay safe from outside disruption is to do it from the inside. 
          </p>
          <p>
          Basically, my design motto is: we can always make products more understandable, useful and friendlier. 
          </p>
          <h3 id="dynamic-styles">So lets!,</h3>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
