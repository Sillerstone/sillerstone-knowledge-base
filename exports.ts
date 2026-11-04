import MarkdownIt from "markdown-it";

export const MARKDOWN_IT = new MarkdownIt();
export enum StaffRanks {
    Owner = "👑 Владелец",
    Manager = "⭐ Управляющий",
    Curator = "👁️ Куратор",
    BotDeveloper = "🛠️ Разработчик бота",
    HrManager = "💼 HR-менеджер",
    Administrator = "⚙️ Администратор",
    JuniorAdministrator = "⚙️ Младший администратор",
    Launcher = "🔌 Ответственный за запуск",
    Moderator = "🛡️ Модератор",
    JuniorModerator = "🛡️ Младший модератор",
    Trainee = "🎓 Стажёр",
    MapBuilder = "👷 Строитель карт",
    Helper = "🛟 Хэлпер",
    TelegramEditor = "💬 Редактор ТГ"
}