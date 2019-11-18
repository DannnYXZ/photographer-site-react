import React from 'react';
import Gallery from 'react-photo-gallery';
import Article from '../Article/Article';
import LazyImage from "../LazyImage/LazyImage";
import 'lazysizes';
import {LightgalleryProvider, LightgalleryItem} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const renderLazy = ({index, photo, margin}) => {
  console.log(photo);
  return (
      <LightgalleryItem src={photo.src}>
        <LazyImage key={index}
                   src={photo.src}
                   style={{
                     width: photo.width,
                     height: photo.height,
                     margin: margin
                   }}
                   placeholderColor={photo.avg}/>
      </LightgalleryItem>
  );
};

class Album extends React.Component {
  render() {
    let article = this.props.desc
        ? <Article title={this.props.desc.title} text={this.props.desc.text}/>
        : null;

    console.log(this.props);
    return (
        <section className='album'>
          {article}
          <LightgalleryProvider>
            <Gallery photos={this.props.photos}
                     limitNodeSearch={2}
                     margin={2}
                     renderImage={renderLazy}/>

          </LightgalleryProvider>
        </section>
    );
  }
}

export default Album;
