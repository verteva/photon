import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars as fasBars,
  faBolt as fasBolt,
  faCheck as fasCheck,
  faCircle as fasCircle,
  faCircle1 as fasCircle1,
  faCircle2 as fasCircle2,
  faCircle3 as fasCircle3,
  faCircle4 as fasCircle4,
  faCircle5 as fasCircle5,
  faCircle6 as fasCircle6,
  faCircle7 as fasCircle7,
  faCircle8 as fasCircle8,
  faCircle9 as fasCircle9,
  faCircleDot as fasCircleDot,
  faCircleCheck as fasCircleCheck,
  faClose as fasClose,
  faCross as fasCross,
  faLock as fasLock,
  faLockKeyhole as fasLockKeyhole,
  faSquareCheck as fasSquareCheck,
  faThumbsUp as fasThumbsUp,
  faHandHoldingUsd as fasHandHoldingUsd,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faAngleLeft as falAngleLeft,
  faAngleRight as falAngleRight,
  faArrowRight as falArrowRight,
  faArrowRightArrowLeft as falArrowRightArrowLeft,
  faBriefcase as falBriefcase,
  faBriefcaseMedical as falBriefcaseMedical,
  faBus as falBus,
  faBusinessTime as falBusinessTime,
  faCheck as falCheck,
  faChevronDown as falChevronDown,
  faChevronLeft as falChevronLeft,
  faChevronRight as falChevronRight,
  faChevronUp as falChevronUp,
  faChildren as falChildren,
  faCircle as falCircle,
  faCircleCheck as falCircleCheck,
  faCircleDot as falCircleDot,
  faCircleExclamation as falCircleExclamation,
  faCircleInfo as falCircleInfo,
  faCirclePlus as falCirclePlus,
  faClock as falClock,
  faClose as falClose,
  faCloudArrowUp as falCloudArrowUp,
  faCopy as falCopy,
  faCouch as falCouch,
  faDollar as falDollar,
  faDollarSign as falDollarSign,
  faEnvelope as falEnvelope,
  faEye as falEye,
  faFileArrowUp as falFileArrowUp,
  faFileInvoiceDollar as falFileInvoiceDollar,
  faFileLines as falFileLines,
  faFileLock as falFileLock,
  faFileShield as falFileShield,
  faGraduationCap as falGraduationCap,
  faHourglassClock as falHourglassClock,
  faHouse as falHouse,
  faHouseUser as falHouseUser,
  faLocationDot as falLocationDot,
  faLockKeyhole as falLockKeyhole,
  faMapMarker as falMapMarker,
  faMapPin as falMapPin,
  faMessageLines as falMessageLines,
  faMinus as falMinus,
  faPencil as falPencil,
  faPenToSquare as falPenToSquare,
  faPercent as falPercent,
  faPhone as falPhone,
  faPlugCircleBolt as falPlugCircleBolt,
  faPlus as falPlus,
  faRightFromBracket as falRightFromBracket,
  faSackDollar as falSackDollar,
  faShieldKeyhole as falShieldKeyhole,
  faShoppingCart as falShoppingCart,
  faSquare as falSquare,
  faSquareCheck as falSquareCheck,
  faSquareMinus as falSquareMinus,
  faSquarePlus as falSquarePlus,
  faTrashCan as falTrashCan,
  faTriangleExclamation as falTriangleExclamation,
  faTshirt as falTshirt,
  faUniversalAccess as falUniversalAccess,
  faUpload as falUpload,
  faWatchFitness as falWatchFitness,
  faXmark as falXmark,
} from '@fortawesome/pro-light-svg-icons';

import {
  faHouse as fatHouse,
  faHouseUser as fatHouseUser,
  faSackDollar as fatSackDollar,
} from '@fortawesome/pro-thin-svg-icons';

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
  fasCircle1,
  fasCircle2,
  fasCircle3,
  fasCircle4,
  fasCircle5,
  fasCircle6,
  fasCircle7,
  fasCircle8,
  fasCircle9,
  fasCircleCheck,
  fasCircleDot,
  fasClose,
  fasCross,
  fasLock,
  fasLockKeyhole,
  fasSquareCheck,
  fasThumbsUp,
  fasHandHoldingUsd,
];

const lightIcons = [
  falAngleLeft,
  falAngleRight,
  falArrowRight,
  falArrowRightArrowLeft,
  falBriefcase,
  falBriefcaseMedical,
  falBus,
  falBusinessTime,
  falCheck,
  falChevronDown,
  falChevronLeft,
  falChevronRight,
  falChevronUp,
  falChildren,
  falCircle,
  falCircleCheck,
  falCircleDot,
  falCircleExclamation,
  falCircleInfo,
  falCirclePlus,
  falClock,
  falClose,
  falCloudArrowUp,
  falCopy,
  falCouch,
  falDollar,
  falDollarSign,
  falEnvelope,
  falEye,
  falFileArrowUp,
  falFileInvoiceDollar,
  falFileLines,
  falFileLock,
  falFileShield,
  falGraduationCap,
  falHourglassClock,
  falHouse,
  falHouseUser,
  falLocationDot,
  falLockKeyhole,
  falMapMarker,
  falMapPin,
  falMessageLines,
  falMinus,
  falPencil,
  falPenToSquare,
  falPercent,
  falPhone,
  falPlugCircleBolt,
  falPlus,
  falRightFromBracket,
  falSackDollar,
  falShieldKeyhole,
  falShoppingCart,
  falSquare,
  falSquareCheck,
  falSquareMinus,
  falSquarePlus,
  falTrashCan,
  falTriangleExclamation,
  falTshirt,
  falUniversalAccess,
  falUpload,
  falWatchFitness,
  falXmark,
];

const thinIcons = [fatHouse, fatHouseUser, fatSackDollar];

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
