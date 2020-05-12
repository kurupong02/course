import ProfileIcon from '../../../../assets/icons/ic-editprofile-gray-24-px.svg'
import PointRewardsIcon from '../../../../assets/icons/ic-point-rewards-gray-24-px.svg'
import PurchaseHistoryIcon from '../../../../assets/icons/ic-purchasehistory-gray-24-px.svg'
import AccountSettingIcon from '../../../../assets/icons/ic-accountsetting-gray-24-px.svg'
import MyCourseIcon from '../../../../assets/icons/ic-mycourse-24-px.svg'
import MyScheduleIcon from '../../../../assets/icons/ic-myschedule-gray-24-px.svg'
import CertificatesIcon from '../../../../assets/icons/ic-certificate-gray-24-px.svg'

const menus = {
  instructor: [
    {
      label: 'My Course',
      link: '/curriculum/courses',
      icon: MyCourseIcon,
    },
    {
      label: 'Member',
      link: '/member/teacher',
      icon: MyCourseIcon,
    },
  ],
  learner: [
    {
      label: 'My Course',
      link: '/my-course/courses',
      icon: MyCourseIcon,
    },
    {
      label: 'My Schedule',
      link: '/my-schedule',
      icon: MyScheduleIcon,
    },
    {
      label: 'Certificates',
      link: '/my-certificates',
      icon: CertificatesIcon,
    },
    {
      label: 'Profile',
      link: '/my-profile/profile',
      icon: ProfileIcon,
    },
    {
      label: 'Point&Rewards',
      link: '/point-rewards',
      icon: PointRewardsIcon,
    },
    {
      label: 'Purchase History',
      link: '/purchase-history',
      icon: PurchaseHistoryIcon,
    },
    {
      label: 'Account Setting',
      link: '/account-setting/general-information',
      icon: AccountSettingIcon,
    },
  ],
}

export default menus
