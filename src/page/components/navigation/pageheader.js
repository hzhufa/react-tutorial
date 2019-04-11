import { PageHeader,Typography  } from 'antd';
import {Component} from 'react';
class Navigation_PageHeader  extends Component {
  render() {
    const routes = [
      {
        path: 'index',
        breadcrumbName: 'First-level Menu',
      },
      {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
      },
      {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
      },
    ];
    const { Paragraph } = Typography;
    const content = (
      <div className="content">
        <Paragraph>

          Ant Design interprets the color system into two levels: a system-level
          color system and a product-level color system.
        </Paragraph>
        <Paragraph>
          Ant Design&#x27;s design team preferred to design with the HSB color model,
          which makes it easier for designers to have a clear psychological
          expectation of color when adjusting colors, as well as facilitate
          communication in teams.
        </Paragraph>
        <p className="contentLink">
          <a>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              alt="start"
            />
            Quick Start
          </a>
          <a>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
              alt="info"
            />
            Product Info
          </a>
          <a>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              alt="doc"
            />
            Product Doc
          </a>
        </p>
      </div>
    );
    const extraContent = (
      <img
        src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
        alt="content"
      />
    );

    return (
      <div>
        <div>1.标准页头，适合使用在需要简单描述的场景。</div>
        <PageHeader
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
        />

        <br/>
        <br/>
        <br/>
        <div>2.带面包屑页头，适合层级比较深的页面，让用户可以快速导航。</div>
        <PageHeader
          title="Title"
          breadcrumb={{ routes }}
        />

        <br/>
        <br/>
        <br/>
        <div>3.带内容的例子,可以优先展示页面的主要信息。</div>
        <PageHeader title="Title" breadcrumb={{ routes }}>
          <div className="wrap">
            <div className="content">{content}</div>
            <div className="extraContent">{extraContent}</div>
          </div>
        </PageHeader>

      </div>
    );
  }
}

export default Navigation_PageHeader;
