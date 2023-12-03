import DeepChatBrowser from '../../../components/table/deepChatBrowser';
import OnVisibleAnimation from '../../utils/onVisibleAnimation';
import React from 'react';
import './connect.css';

function RightPanel() {
  return (
    <div id="connect-right-panel" className="feature-panel">
      <div id="connect-text">
      Effortlessly connect to unlimited files, documents or APIs. Harness the power of top AI providers or tailor with your own servers, all through Verbal – the key to a smarter, interconnected future.

      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div id="connect-left-panel" className="feature-panel">
      <div className="iframe-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          src="https://llama2.kleyaliaj.repl.co/"
          title="Chatbot"
          loading="lazy"
          style={{
            width: '60%',
            height: '500px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ccc',
            marginLeft: '10%', // Adjust this to control how far to the right the iframe appears
            marginRight: '0',
          }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}




export default function Connect() {
  return (
    <div id="connect">
      <div className="feature-sub-header">Explore our services</div>
      <OnVisibleAnimation beforeClass={''} afterClass={'connect-panels-close'}>
        <div id="connect-panels">
          <LeftPanel></LeftPanel>
          <RightPanel></RightPanel>
        </div>
      </OnVisibleAnimation>
    </div>
  );
}
