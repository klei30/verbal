import DeepChatBrowser from '../../../components/table/deepChatBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './playgroundChatComponent.css';
import React from 'react';

const DEMO_RESPONSE = {response: {text: "Click the 'Configure' button below to connect to a service."}};

export default function ChatComponent({config}) {
  const componentRef = React.createRef(null);

  // updating messages here to keep track of them so that when user moves to a different page they can be added to config
  // to note componentRef.current will be undefined, hence need to keep track
  function newestMessages({isInitial}) {
    if (!isInitial) {
      const {messages} = config;
      messages.splice(0, messages.length);
      messages.push(...componentRef.current.children[0].getMessages());
    }
  }

  function clearMessages() {
    config?.messages.splice(0, config.messages.length);
  }

  function getBoolean(object, name) {
    if (object[name]) {
      return object[name];
    }
    const firstKey = Object.keys(object)[0] === 'key' ? Object.keys(object)[1] : Object.keys(object)[0];
    if (typeof object[firstKey] === 'object') {
      return getBoolean(object[firstKey], name);
    }
    return false;
  }

  return (
    <BrowserOnly>
      {() => {
        // colorMode tracked in in wrapper because component would otherwise
        // not update properly as styles overwrite each other
        const {colorMode} = useColorMode();

        if (colorMode === 'dark') {
          return (
            <div ref={componentRef} className="playground-chat-component">
              {config?.connect?.custom ? (
                <DeepChatBrowser
                  request={config.connect.custom}
                  images={getBoolean(config.connect, 'allowImages')}
                  camera={getBoolean(config.connect, 'allowCamera')}
                  gifs={getBoolean(config.connect, 'allowGifs')}
                  audio={getBoolean(config.connect, 'allowAudio')}
                  microphone={getBoolean(config.connect, 'allowMicrophone')}
                  mixedFiles={getBoolean(config.connect, 'allowMixedFiles')}
                  style={darkContainerStyle}
                  messageStyles={darkMessageStyles}
                  initialMessages={config.messages}
                  onNewMessage={newestMessages}
                  onClearMessages={clearMessages}
                  textInput={darkTextInput}
                  submitButtonStyles={darkButtonStyles}
                  auxiliaryStyle={darkAuxiliaryStyle}
                  introPanelStyle={darkPanelStyle}
                ></DeepChatBrowser>
              ) : config?.connect?.demo ? (
                <DeepChatBrowser
                  demo={DEMO_RESPONSE}
                  style={darkContainerStyle}
                  messageStyles={darkMessageStyles}
                  initialMessages={config.messages}
                  onNewMessage={newestMessages}
                  onClearMessages={clearMessages}
                  textInput={darkTextInput}
                  submitButtonStyles={darkButtonStyles}
                  auxiliaryStyle={darkAuxiliaryStyle}
                  introPanelStyle={darkPanelStyle}
                ></DeepChatBrowser>
              ) : (
                <DeepChatBrowser
                  directConnection={config.connect}
                  images={getBoolean(config.connect, 'allowImages')}
                  camera={getBoolean(config.connect, 'allowCamera')}
                  gifs={getBoolean(config.connect, 'allowGifs')}
                  audio={getBoolean(config.connect, 'allowAudio')}
                  microphone={getBoolean(config.connect, 'allowMicrophone')}
                  mixedFiles={getBoolean(config.connect, 'allowMixedFiles')}
                  style={darkContainerStyle}
                  messageStyles={darkMessageStyles}
                  initialMessages={config.messages}
                  onNewMessage={newestMessages}
                  onClearMessages={clearMessages}
                  textInput={darkTextInput}
                  submitButtonStyles={darkButtonStyles}
                  auxiliaryStyle={darkAuxiliaryStyle}
                  introPanelStyle={darkPanelStyle}
                ></DeepChatBrowser>
              )}
            </div>
          );
        }

        return (
          <div ref={componentRef} className="playground-chat-component">
            {config?.connect?.custom ? (
              <DeepChatBrowser
                request={config.connect.custom}
                images={getBoolean(config.connect, 'allowImages')}
                camera={getBoolean(config.connect, 'allowCamera')}
                gifs={getBoolean(config.connect, 'allowGifs')}
                audio={getBoolean(config.connect, 'allowAudio')}
                microphone={getBoolean(config.connect, 'allowMicrophone')}
                mixedFiles={getBoolean(config.connect, 'allowMixedFiles')}
                style={lightContainerStyle}
                initialMessages={config.messages}
                onNewMessage={newestMessages}
                onClearMessages={clearMessages}
              ></DeepChatBrowser>
            ) : config?.connect?.demo ? (
              <DeepChatBrowser
                demo={DEMO_RESPONSE}
                style={lightContainerStyle}
                initialMessages={config.messages}
                onNewMessage={newestMessages}
                onClearMessages={clearMessages}
              ></DeepChatBrowser>
            ) : (
              <DeepChatBrowser
                directConnection={config.connect}
                images={getBoolean(config.connect, 'allowImages')}
                camera={getBoolean(config.connect, 'allowCamera')}
                gifs={getBoolean(config.connect, 'allowGifs')}
                audio={getBoolean(config.connect, 'allowAudio')}
                microphone={getBoolean(config.connect, 'allowMicrophone')}
                mixedFiles={getBoolean(config.connect, 'allowMixedFiles')}
                style={lightContainerStyle}
                initialMessages={config.messages}
                onNewMessage={newestMessages}
                onClearMessages={clearMessages}
              ></DeepChatBrowser>
            )}
          </div>
        );
      }}
    </BrowserOnly>
  );
}

const darkContainerStyle = {
  borderRadius: '10px',
  boxShadow: '0 .5rem 1rem 0 rgba(44, 51, 73, .1)',
  border: '1px solid #ededed',
  marginLeft: '10px',
  border: 'unset',
  marginRight: '10px',
  width: '302px',
  backgroundColor: '#2e2e2e',
};

const darkMessageStyles = {
  default: {
    ai: {bubble: {backgroundColor: '#545454', color: 'white'}},
  },
  loading: {
    bubble: {backgroundColor: '#545454', color: 'white'},
  },
};

const darkTextInput = {
  styles: {
    container: {
      backgroundColor: '#4e4e4e',
      border: 'unset',
      color: '#e8e8e8',
    },
  },
  placeholder: {style: {color: '#bcbcbc'}},
};

const darkButtonStyles = {
  submit: {
    container: {
      default: {bottom: '0.7rem'},
    },
    svg: {
      styles: {
        default: {
          filter:
            'brightness(0) saturate(100%) invert(70%) sepia(52%) saturate(5617%) hue-rotate(185deg) brightness(101%) contrast(101%)',
        },
      },
    },
  },
};

const darkAuxiliaryStyle = `
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: unset;
  }`;

const darkPanelStyle = {backgroundColor: '#4f4f4f', color: 'white', border: 'unset'};

const lightContainerStyle = {
  borderRadius: '10px',
  boxShadow: '0 .5rem 1rem 0 rgba(44, 51, 73, .1)',
  border: '1px solid #ededed',
  marginLeft: '10px',
  marginRight: '10px',
  width: '302px',
};
