import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const classNames = require('classnames');

import { RadioButtonGroup, RadioButton } from '../../../components/RadioButtonGroup';
import { ClassNameProps } from '../../../common';

import './MediaType.scss';

export interface MediaTypeProps extends ClassNameProps {
  readonly onChange?: (selectedId: string) => void;
}

export class MediaType extends React.Component<MediaTypeProps, any> {
  private readonly radioButtons: ReadonlyArray<RadioButton> = [
    new RadioButton('news-article', 'News Article'),
    new RadioButton('report', 'Report'),
    new RadioButton('scholarly', 'Scholarly'),
    new RadioButton('technical', 'Technical')
  ];

  constructor() {
    super(...arguments);
    this.state = {
      subType: 'news-article'
    }
  }

  render() {
    return (
      <section className={classNames('media-type', this.props.className)}>
        <h2>Media Type</h2>
        <Tabs className="media-type-tabs">
          <TabList>
            <Tab>Article</Tab>
            {/*<Tab>Audio</Tab>*/}
            {/*<Tab>Video</Tab>*/}
            {/*<Tab>Image</Tab>*/}
          </TabList>
          <TabPanel>
            <RadioButtonGroup radioButtons={this.radioButtons} onSelectionChange={this.onChange.bind(this)} />
          </TabPanel>
        </Tabs>
      </section>
    )
  }

  private onChange(subType: string) {
    this.setState({
      subType
    });
  }
}