import React from 'react';
import './Contacts.css'
import Section from "../Section/Section";
import LazyImage from "../LazyImage/LazyImage";

class Contacts extends React.Component {
  render() {
    return (
        <Section className="section">
          <div className="contacts">
            <div className="contacts-desc">
              <p>27.04−24.05 Italy / Италия<br/>25.05−29.05 Germany / Германия</p>
              <p><br/></p>
              <p>для быстрой связи пишите в&nbsp;
                <b>
                  <a href="#" target="_blank">
                    <u>
                      <i>DirectInsta</i>
                    </u>
                  </a>
                </b>&nbsp;или&nbsp;
                <a href="tel:+99649345150" target="_blank">
                  <u><b><i>WhatsApp</i></b></u>
                </a>
              </p><p>Снимаю в&nbsp;Беларуси и&nbsp;Европе.<br/>
            </p>
              <h3><b>Мои контакты</b></h3>
              <p>
                <a href="https://vk.com/" target="_blank">Вконтакте</a><br/>
                <a href="https://www.facebook.com/" target="_blank">Facebook</a><br/>
                <a href="https://www.instagram.com/" target="_blank">Insta</a>
              </p>
              <p>
                <a href="https://t.me/" target="_blank">Telegram</a>
                <br/>Mob.:&nbsp;
                <a href="tel:+79649111150" target="_blank">+7 (964) 911-11-50</a>
                &nbsp;
              </p>
              <p>
                <a href="http://mailto:salami@gmail.com"
                   target="_blank">shountikov@gmail.com
                </a>
              </p>
            </div>

            <div className="round-image">
              <a href="https://www.instagram.com/" target="_blank">
                <LazyImage alt="Контакты фотографа Шунтиков Сергей — Фотограф"
                           className="person-img"
                           src="content/author.jpg"
                           style={{
                             borderRadius: '50%',
                             overflow: 'hidden'
                           }}
                           placeholderColor='#00ff00'/>
              </a>
            </div>
          </div>
        </Section>
    );
  }
}

export default Contacts;
