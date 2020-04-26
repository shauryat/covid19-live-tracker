import React from 'react';
import { Footer } from 'react-bulma-components';
import { Container } from 'react-bulma-components';
import { Hero } from 'react-bulma-components';
import { Content } from 'react-bulma-components';


const Ender = () => {
    return (
        <div>
        <Hero>
        <Hero.Head renderAs="header" />
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <p>
                  <strong>India Covid-19 Tracker</strong> by <a href="https://github.com/shauryat">Shaurya Tuli</a>. The source API is provided by
                  <a href="https://api.covid19india.org/data.json"> covid19india</a>. 
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
        </div>
    );
};

export default Ender;