import s from './booster.module.css'
import cn from 'classnames'
import BoosterTask from '../components/BoosterTask/BoosterTask';
import AskUs from '../components/AskUs/AskUs';

const BoosterPage = () => {
    return (
        <>
        <div className={s.booster}>
            <div className={s.inner}>
                <div className={s.block1}>
                    <div className={s.l}>
                        <h1>🚀 Бустер скидки</h1>
                        <p>
                            Бустер скидки - это быстрый способ накопить бонусные баллы, которые конвертируются в персональную скидку и дают возможность совершать обмены по более выгодным курсам. Ниже список заданий, которые можно выполнить на одном вздохе, и за это заработать приличное количество баллов!
                        </p>
                    </div>
                    <div className={s.r}>
                        <div className={s.flow}>
                            <div className={s.f1}>
                                <b>0</b>
                                <div>Ваши баллы</div>
                            </div>
                            <div className={s.f2}>
                                <b>635</b>
                                <div>Можно забустить</div>
                            </div>
                            <div className={s.arrow}>
                                <span className={s.flaticonArrRight}>"{'>'}"</span>
                            </div>
                        </div>
                        <div className={s.discount}>
                            <div>
                                Ваша скидка: 
                                <b>0%</b>
                            </div>
                            <div>
                                Выполнено заданий: 
                                <b>0/9</b>
                            </div>
                        </div>
                        <div className={s.button}>
                            <a href="/ru/" className={cn(s.btn, s.green)}>
                                Заработать баллы
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.block2}>
                    <div className={s.inner}>
                        <h3>Задания</h3>
                        <BoosterTask/>
                    </div>
                </div>
                <div className={s.block3}>
                    <div className={s.inner}>
                        <h3>Часто задаваемые вопросы</h3>
                        <div className={s.sides}>
                            <div className={s.l}>
                                <div className={s.question}>
                                    <h5><span>Для чего нужны баллы?</span></h5>
                                    <div className={s.answer}>В рамках нашей <a href="/ru/partners/" target="_blank" rel='noreferrer'>программы лояльности</a>, после каждого обмена вы получаете баллы в эквиваленте 5% от суммы обмена по курсу USD. Например, при обмене 1 000$ вы получаете 50 бонусных баллов. Выполняя эти задания, вы можете получать дополнительные баллы, которые суммируются для вашего аккаунта. Чем больше у вас баллов - тем выше ваша скидка при обмене.</div>
                                </div>
                                <div className={s.question}>
                                    <h5><span>Я выполнил все задания, это все?</span></h5>
                                    <div className={s.answer}>Мы регулярно будем добавлять новые задания, чтобы дать возможность зарабатывать больше баллов. Следите за новостями на нашем <a href="https://t.me/avanchange" target="_blank" rel='noreferrer'>Telegram</a> канале и <a href="/ru/blog/">нашем блоге</a>.</div>
                                </div>
                                <div className={s.question}>
                                    <h5><span>Для чего нужно задание с привязкой Telegram аккаунта?</span></h5>
                                    <div className={s.answer}>Все задания формируются с целью улучшения нашего сервиса. Все действия, которые вы выполняете будут иметь смысл в дальнейших обновлениях сервиса.</div>
                                </div>
                                <div className={s.question}>
                                    <h5><span>Не опасно ли привязывать Telegram?</span></h5>
                                    <div className={s.answer}>Конечно же нет! Мы не получаем никакого доступа к вашему аккаунту. Авторизация происходит на стороне <b><a href="https://telegram.org" target="_blank" rel='noreferrer'>telegram.org</a></b> через открытый <a href="https://core.telegram.org/api/auth" target="_blank" rel='noreferrer'>Telegram User Authorization API</a>. После авторизации, Telegram передает нашему сайту, по защищенному каналу, только ваши публичные данные. А именно ваш <b>`user_name`</b> и <b>`user_id`</b> с хешем, для проверки подлинности.</div>
                                </div>
                            </div>
                                
                            <div className={s.r}>
                                <div className={s.question}>
                                    <h5><span>Баллы начисляются навсегда или временно?</span></h5>
                                    <div className={s.answer}>Все заработанные баллы начисляются безсрочно, как и в случае с баллами от нашей <a href="/ru/partners/" target="_blank" rel='noreferrer'>программы лояльности</a>. Задание выполняете 1 раз, а баллы получаете навсегда.</div>
                                </div>
                                <div className={s.question}>
                                    <h5><span>Сколько баллов нужно, чтобы получить скидку?</span></h5>
                                    <div className={s.answer}>Скидка формируется исходя из накопленных баллов, чем больше баллов - тем выше скидка. Подробнее на странице <a href="/ru/partners/" target="_blank" rel='noreferrer'>программы лояльности</a></div>
                                </div>
                                <div className={s.question}>
                                    <h5><span>Баллы начислились, но скидка не обновляется</span></h5>
                                    <div className={s.answer}>Баллы начисляются мгновенно, после выполнения задания. А скидка партнера перерасчитывается раз в 5-15 минут. Пожалуйста, ожидайте.</div>
                                </div>
                                <div className={s.question}>
                                    <h5><span>Зачем нужно загружать аватарку?</span></h5>
                                    <div className={s.answer}>Это очередное задание, которое нацелено на улучшение сервиса. Например, отзыв с аватаркой пользователя вызывает больше доверия для новых клиентов, чем отзыв без аватарки. Все задания тщательно продуманы и имеют обратную отдачу, для совершенствования сервиса.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AskUs/>
        </>
    );
};

export default BoosterPage;