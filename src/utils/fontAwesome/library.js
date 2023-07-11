import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars as fasBars,
  faBolt as fasBolt,
  faCheck as fasCheck,
  faCircle as fasCircle,
  faCircleDot as fasCircleDot,
  faClose as fasClose,
  faCross as fasCross,
  faLock as fasLock,
  faLockKeyhole as fasLockKeyhole,
  faSquareCheck as fasSquareCheck,
  faThumbsUp as fasThumbsUp,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faAngleLeft as falAngleLeft,
  faAngleRight as falAngleRight,
  faArrowRightArrowLeft as falArrowRightArrowLeft,
  faBusinessTime as falBusinessTime,
  faCheck as falCheck,
  faChevronRight as falChevronRight,
  faCircle as falCircle,
  faCircleDot as falCircleDot,
  faCirclePlus as falCirclePlus,
  faCloudArrowUp as falCloudArrowUp,
  faCopy as falCopy,
  faClose as falClose,
  faDollar as falDollar,
  faDollarSign as falDollarSign,
  faEnvelope as falEnvelope,
  faEye as falEye,
  faFileArrowUp as falFileArrowUp,
  faFileInvoiceDollar as falFileInvoiceDollar,
  faFileLines as falFileLines,
  faFileLock as falFileLock,
  faHourglassClock as falHourglassClock,
  faHouse as falHouse,
  faLocationDot as falLocationDot,
  faLockKeyhole as falLockKeyhole,
  faMapMarker as falMapMarker,
  faMapPin as falMapPin,
  faMessageLines as falMessageLines,
  faMinus as falMinus,
  faPencil as falPencil,
  faPlus as falPlus,
  faRightFromBracket as falRightFromBracket,
  faShieldKeyhole as falShieldKeyhole,
  faSquare as falSquare,
  faSquareCheck as falSquareCheck,
  faTrashCan as falTrashCan,
  faTriangleExclamation as falTriangleExclamation,
  faUpload as falUpload,
  faUniversalAccess as falUniversalAccess,
  faXmark as falXmark,
} from '@fortawesome/pro-light-svg-icons';

import { faHouse as fatHouse } from '@fortawesome/pro-thin-svg-icons';

import { faCheckCircle as fadCheckCircle } from '@fortawesome/pro-duotone-svg-icons';

import {
  faCircleDot as farCircleDot,
  faCircleQuestion as farCircleQuestion,
  faMicrophone as farMicrophone,
  faUpFromBracket as farUpFromBracket,
} from '@fortawesome/pro-regular-svg-icons';

import { fakTime } from './fakIcons';

const regularIcons = [
  farCircleDot,
  farCircleQuestion,
  farMicrophone,
  farUpFromBracket,
];

const solidIcons = [
  fasBars,
  fasBolt,
  fasCheck,
  fasCircle,
  fasCircle,
  fasCircleDot,
  fasClose,
  fasCross,
  fasLock,
  fasLockKeyhole,
  fasSquareCheck,
  fasThumbsUp,
];

const lightIcons = [
  falAngleLeft,
  falAngleRight,
  falArrowRightArrowLeft,
  falBusinessTime,
  falCheck,
  falChevronRight,
  falCircle,
  falCircleDot,
  falCirclePlus,
  falClose,
  falCloudArrowUp,
  falCopy,
  falDollar,
  falDollarSign,
  falEnvelope,
  falEye,
  falFileArrowUp,
  falFileInvoiceDollar,
  falFileLines,
  falFileLock,
  falHourglassClock,
  falHouse,
  falLocationDot,
  falLockKeyhole,
  falMapMarker,
  falMapPin,
  falMessageLines,
  falMinus,
  falPencil,
  falPlus,
  falRightFromBracket,
  falShieldKeyhole,
  falSquare,
  falSquareCheck,
  falTrashCan,
  falTriangleExclamation,
  falUpload,
  falUniversalAccess,
  falXmark,
];

const thinIcons = [fatHouse];

const duotoneIcons = [fadCheckCircle];

const customIcons = [fakTime];

library.add(
  ...regularIcons,
  ...solidIcons,
  ...lightIcons,
  ...thinIcons,
  ...duotoneIcons,
  ...customIcons
);
