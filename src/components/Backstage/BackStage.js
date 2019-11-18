import React from 'react';
import Section from "../Section/Section";
import './BackStage.css'

class BackStage extends React.Component {
  render() {
    return (
        <div className="backstage">
          <h3>Бэкстейдж моих фотосъемок</h3>
          {this.props.videos.map((id, i) =>
              <Section key={i}>
                <div className="yt-holder">
                  <iframe className='yt-video'
                          src={`https://www.youtube.com/embed/${id}`}
                          width='100%'
                          height='100%'
                          frameBorder='0'
                          allowFullScreen/>
                </div>
              </Section>
          )}
        </div>
    );
  }
}

export default BackStage;
