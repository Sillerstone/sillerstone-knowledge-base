<script setup>
import StaffRank from "../../components/StaffRank.vue";
import { StaffRanks } from "../../exports";
</script>

# Должности

::: warning Внимание
Каждый член персонала выполняет обязанности своей должности + обязанности нижестоящих должностей
:::

- <StaffRank :rank="StaffRanks.Owner" /> – владелец проекта. *Относится к высшей администрации проекта*

- <StaffRank :rank="StaffRanks.Manager" /> – человек, контролирующий работу проекта. *Относится к высшей администрации проекта*

- <StaffRank :rank="StaffRanks.Curator" /> – следит за работой персонала. *Относится к высшей администрации проекта*

- <StaffRank :rank="StaffRanks.BotDeveloper" /> – разработчик бота. Дополнительная роль для <StaffRank :rank="StaffRanks.Administrator" /> и выше

- <StaffRank :rank="StaffRanks.HrManager" /> – проводит набор в персонал и обучает его. Дополнительная роль для <StaffRank :rank="StaffRanks.JuniorAdministrator" /> и выше

- <StaffRank :rank="StaffRanks.Administrator" /> и <StaffRank :rank="StaffRanks.JuniorAdministrator" /> – рассматривают тикеты игроков, связанные с игрой и Discord'ом, разбирают заявки (`#rp–действия`, `#смена–персонажа` и т.д), следят за модераторами

- <StaffRank :rank="StaffRanks.Launcher" /> – ответственный за запуск игрового сервера. Дополнительная роль для <StaffRank :rank="StaffRanks.Moderator" /> и выше

- <StaffRank :rank="StaffRanks.Moderator" /> и <StaffRank :rank="StaffRanks.JuniorModerator" /> – следят за соблюдением правил игроками, выдают наказания, рассматривают тикеты, связанные с Discord'ом

- <StaffRank :rank="StaffRanks.Trainee" /> – член персонала, который проходит стажировку. Выполняет обязанности младшего модератора

- <StaffRank :rank="StaffRanks.MapBuilder" /> – строитель игровых карт (`#🗺│карта`). Дополнительная роль для <StaffRank :rank="StaffRanks.Helper" /> и выше

- <StaffRank :rank="StaffRanks.Helper" /> – помогает новичкам на проекте, отвечает на вопросы игроков, сообщает о нарушениях вышестоящему персоналу

- <StaffRank :rank="StaffRanks.TelegramEditor" /> – пишет посты для [Telegram–канала проекта](https://t.me/sillerstone)
