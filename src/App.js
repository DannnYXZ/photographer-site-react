import site from './site'
import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import AlbumCover from "./components/AlbumCover/AlbumCover";
import Album from "./components/Album/Album";
import AlbumContainer from "./components/AlbumContainer/AlbumContainer";
import PriceList from "./components/PriceList/PriceList";
import BackStage from "./components/Backstage/BackStage";
import Contacts from "./components/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Template from "./components/Template/Template";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [];
    this.menuItems = [];
    this.state = {
      sidebarLogo: null
    };
    this.menu = <Menu>{this.menuItems}</Menu>;
    this.social = <SocialLinks data={site.social}/>;
    this.footer = <Footer/>;
    this.buildRoutesContent(site.menu);
  }

  render() {
    //<BrowserRouter basename='WFolio'>
    console.log(JSON.stringify(site, null, 4));
    return (
        <HashRouter>
          <Switch>{this.routes}</Switch>
        </HashRouter>
    );
  }

  renderPage(sidebarImg, content) {
    return <Template content={content}
                     menu={this.menu}
                     sidebar={<SideBar background={sidebarImg} social={this.social}/>}
                     footer={this.footer}/>;
  }

  renderAlbumPage(albumData) {
    let content = <Album photos={albumData.images} desc={albumData.desc}/>;
    return this.renderPage(albumData.thumbnail, content);
  }

  renderAlbumCollectionPage(collectionData) {
    let covers = collectionData.albums.map((albumData, i) => {
      return <AlbumCover key={i}
                         link={albumData.link}
                         thumbnail={albumData.thumbnail}
                         caption={albumData.name}
                         desc={albumData.desc}/>
    });
    let content = <AlbumContainer>{covers}</AlbumContainer>;
    return this.renderPage(collectionData.sidebar, content);
  }

  renderContactsPage(data) {
    return this.renderPage(data.sidebar, <Contacts/>);
  }

  renderBackstagePage(data) {
    return this.renderPage(data.sidebar, <BackStage videos={data.videos}/>)
  }

  renderPricePage(data) {
    let content = <PriceList images={data.images} social={this.social}/>;
    return this.renderPage(data.sidebar, content);
  }

  buildRoutesContent(elementsArray) {
    for (let item of elementsArray) {
      let newComponent = null;
      switch (item.type) {
        case 'page-price':
          newComponent = this.renderPricePage(item);
          break;
        case 'page-backstage':
          newComponent = this.renderBackstagePage(item);
          break;
        case 'page-contacts':
          newComponent = this.renderContactsPage(item);
          break;
        case 'album':
          newComponent = this.renderAlbumPage(item);
          break;
        case 'album-collection':
          newComponent = this.renderAlbumCollectionPage(item);
          this.buildRoutesContent(item.albums);
          break;
        default:
      }
      if (item.inMenu)
        this.menuItems.push({
          name: item.name,
          link: item.link
        });
      this.routes.push(<Route exact path={item.link} component={() => newComponent} key={this.routes.length}/>);
    }
  }
}

export default App;
