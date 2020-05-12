import React from 'react'
import { useRouteMatch } from 'react-router'
import { Timeline, Typography, Descriptions, Tag } from 'antd'

import authClient from '../../../utils/authClient'

import Fetch from '../../../components/Fetch'
const { Text } = Typography

const SchoolMemberProfile = () => {
  const match = useRouteMatch()

  const fetch = async () => {
    const { schoolId } = match.params
    const filter = {
      include: ['teachers'],
      limit: 30,
    }
    const res = await authClient.client
      .get(`Schools/${schoolId}/courses`, {
        params: {
          filter,
        },
      })
      .then((res) => res.data)
    const resDraft = await authClient.client
      .get(`DraftCourses`, {
        params: {
          filter: { where: { schoolId } },
        },
      })
      .then((res) => res.data)
    return [...resDraft, ...res]
  }

  return (
    <div>
      <Fetch fetch={fetch}>
        {() => (
          <div style={{ padding: 20 }}>
            <Text strong>Basic information</Text>
            <Descriptions style={{ marginTop: 10 }}>
              <Descriptions.Item label="Day of birth" span={3}>
                September 27, 2019
              </Descriptions.Item>
              <Descriptions.Item label="Addrees" span={3}>
                กรุงเทพ
              </Descriptions.Item>
              <Descriptions.Item label="Language" span={3}>
                TH
              </Descriptions.Item>
            </Descriptions>
            <div style={{ marginTop: 30 }}>
              <Text strong>About</Text>
              <br />
              <Text type="secondary">Hello World..</Text>
            </div>
            <div style={{ marginTop: 50 }}>
              <Text strong>Work Experience</Text>
              <Timeline style={{ marginTop: 16 }}>
                <Timeline.Item>
                  <div>
                    <div>
                      Witsawa <Text>(Feb 2020 - Mar 2020)</Text>
                    </div>
                    <div>dev</div>
                    <div>
                      Bacon ipsum dolor amet strip steak prosciutto alcatra
                      frankfurter, shankle kevin landjaeger corned beef ground
                      round chicken capicola. Brisket shankle andouille t-bone
                      strip steak ham pork chop hamburger burgdoggen pastrami
                      pork venison leberkas capicola jerky. Landjaeger pastrami
                      drumstick buffalo jerky chicken pork loin. Chuck picanha
                      jerky turkey corned beef kevin. Bresaola ribeye cow
                      landjaeger drumstick tongue tail buffalo beef ham.
                      Drumstick spare ribs rump hamburger ribeye shoulder ground
                      round andouille pork tri-tip turducken ham frankfurter
                      short loin picanha. Helllo
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item>
                  <div>
                    <div>
                      Witsawa <Text>(Feb 2020 - Mar 2020)</Text>
                    </div>
                    <div>dev</div>
                    <div>
                      Bacon ipsum dolor amet strip steak prosciutto alcatra
                      frankfurter, shankle kevin landjaeger corned beef ground
                      round chicken capicola. Brisket shankle andouille t-bone
                      strip steak ham pork chop hamburger burgdoggen pastrami
                      pork venison leberkas capicola jerky. Landjaeger pastrami
                      drumstick buffalo jerky chicken pork loin. Chuck picanha
                      jerky turkey corned beef kevin. Bresaola ribeye cow
                      landjaeger drumstick tongue tail buffalo beef ham.
                      Drumstick spare ribs rump hamburger ribeye shoulder ground
                      round andouille pork tri-tip turducken ham frankfurter
                      short loin picanha. Helllo
                    </div>
                  </div>
                </Timeline.Item>
              </Timeline>
            </div>
            <div style={{ marginTop: 30 }}>
              <Text strong>Education</Text>
              <Timeline style={{ marginTop: 16 }}>
                <Timeline.Item>
                  <div>
                    <div>
                      Kasetsart university <Text>(2011 - 2020)</Text>
                    </div>
                    <div>Engineer</div>
                  </div>
                </Timeline.Item>
              </Timeline>
            </div>
            <div style={{ marginTop: 30 }}>
              <Text strong>Interests</Text>
              <br />
              <br />
              <Tag color="blue">design</Tag>
              <Tag color="blue">react</Tag>
              <Tag color="blue">react-native</Tag>
              <Tag color="blue">css</Tag>
            </div>
          </div>
        )}
      </Fetch>
    </div>
  )
}

export default SchoolMemberProfile
