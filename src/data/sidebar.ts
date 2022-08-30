import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import SchoolIcon from "@mui/icons-material/School";
import SubjectIcon from "@mui/icons-material/Subject";
import FeedbackIcon from "@mui/icons-material/Feedback";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SettingsIcon from "@mui/icons-material/Settings";

const sidebar = (path_default: string = "/admin") => [
  {
    name: "Trang chủ",
    icon: DashboardIcon,
    href: `${path_default}`,
  },
  {
    name: "Người dùng",
    icon: AccountBoxIcon,
    href: `${path_default}/nguoi-dung`,
  },
  {
    name: "Tài liệu",
    icon: ArticleIcon,
    href: `${path_default}/nguoi-dung`,
  },
  {
    name: "Danh mục",
    icon: CategoryIcon,
    href: `${path_default}/danh-muc`,
  },
  {
    name: "Slider",
    icon: LinearScaleIcon,
    href: `${path_default}/slider`,
  },
  {
    name: "Trường học",
    icon: SchoolIcon,
    href: `${path_default}/truong-hoc`,
  },
  {
    name: "Học phần",
    icon: SubjectIcon,
    href: `${path_default}/hoc-phan`,
  },
  {
    name: "Góp ý",
    icon: FeedbackIcon,
    href: `${path_default}/gop-y`,
  },
  {
    name: "Bình luận",
    icon: InsertCommentIcon,
    href: `${path_default}/binh-luan`,
  },

  {
    name: "Cài đặt",
    icon: SettingsIcon,
    href: `${path_default}/cai-dat`,
  },
];

export default sidebar;
