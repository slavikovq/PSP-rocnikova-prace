import articleStyles from "../../scss/Article.module.scss";
import user from "../../assets/icons/user-yell.svg";
import like from "../../assets/icons/thumbs-up.svg";
import dislike from "../../assets/icons/thumbs-down.svg";
import calendar from "../../assets/icons/calendar.svg";
import { Link } from "react-router-dom";

export default function Article() {
  return (
    <>
      <div className={articleStyles.articleCard}>
      <div className={articleStyles.badge}>
          <div className={articleStyles.datebadge}>
            <p id={articleStyles.day}>04</p>
            <p id={articleStyles.month}>kys</p>
          </div>
        </div>
        <div className={articleStyles.article}>
          <div className={articleStyles.postheader}>
            <div>
              <img src={user} id={articleStyles.user} alt="" />
            </div>
            <div>
              <h1>New website</h1>
              <div className={articleStyles.namedate}>
                <p id={articleStyles.publisher}>Barbora Slavíková</p>
                <p id={articleStyles.dot}>●</p>
                <div className={articleStyles.date}>
                  <img src={calendar} alt="" id={articleStyles.calendar} />
                  <p>04.03.2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className={articleStyles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              architecto iure voluptates consequatur fugiat necessitatibus
              obcaecati, veritatis ad doloribus exercitationem debitis minus
              fugit harum vitae quibusdam. Porro, maiores! Totam mollitia rerum
              laboriosam illum perferendis laborum id facilis neque, nihil
              veritatis et consequatur, nam sequi corrupti perspiciatis
              voluptatibus esse eos tempore autem aut expedita reiciendis.
              Voluptatem fuga molestias totam, optio iusto, voluptatibus culpa
              praesentium necessitatibus deserunt aperiam dolores quasi ut odit
              iure quibusdam aliquam quod qui minus. Ab earum numquam
              praesentium, nisi magni magnam itaque aut perspiciatis sint nobis
              aspernatur accusamus cupiditate eius sequi delectus in quidem non
              possimus natus maiores ipsam. Exercitationem aliquam quos minima,
              porro laudantium incidunt? Minima quis natus obcaecati quo illo
              quae perferendis porro odio reprehenderit, repellat saepe enim,
              amet doloribus aliquam dicta cum numquam quisquam praesentium quod
              explicabo? Beatae perspiciatis quam molestias nemo qui quo iste
              vel quos aperiam totam fugit obcaecati omnis numquam sapiente, et
              aspernatur consequuntur suscipit facere corrupti adipisci. Quas
              dolores dolorem recusandae ipsa aspernatur animi pariatur
              blanditiis deleniti, nam non! Earum, vel! Ipsum sapiente sit
              harum, id amet tempore doloremque cupiditate voluptatem nostrum
              est ipsam dolorum natus aliquid nam facere commodi beatae quis
              quidem odit? Architecto, sunt. Et repellendus recusandae animi
              aspernatur nulla tempore consequuntur, quis eligendi cum? Eum,
              nostrum quasi labore esse ullam beatae repellat veritatis pariatur
              qui eaque libero neque nisi dolore voluptas consectetur,
              molestias, officiis dolor modi aut. Maiores at et iusto. Tenetur
              nulla rerum nobis est totam atque repudiandae provident? Ad
              aliquam tenetur libero fuga nisi fugit obcaecati at inventore sit
              officia sequi explicabo, necessitatibus totam rem impedit natus
              architecto assumenda excepturi delectus voluptates consectetur!
              Qui necessitatibus unde perferendis voluptas distinctio. Ducimus
              eveniet voluptatum obcaecati, quia necessitatibus harum pariatur
              at, recusandae perspiciatis hic quo doloremque odit voluptatibus
              nesciunt suscipit? Exercitationem omnis atque vel iste numquam
              cumque magni facilis quibusdam. Obcaecati dignissimos molestias,
              nam possimus aliquid asperiores suscipit quam in quo beatae
              voluptatem velit. Non beatae ipsam libero error totam! Possimus
              sed dicta pariatur labore, nam ipsa veniam nisi optio ipsum
              deserunt sint mollitia repellat maiores recusandae tenetur, eaque
              nostrum? Vero necessitatibus, rem ipsum veritatis eligendi
              officiis consequuntur expedita quos voluptate amet corrupti magni
              neque alias voluptas quam, doloribus reiciendis fuga veniam aut
              reprehenderit ad nesciunt omnis praesentium! Eius, pariatur.
              Maxime repellat doloremque consequuntur magnam quos laboriosam.
              Vero nemo veniam temporibus voluptate totam quisquam ducimus odio.
              Aut fugit culpa nisi iusto autem? Impedit sequi a earum
              repudiandae incidunt error. Sint sapiente quam eligendi obcaecati
              provident repellat repellendus quaerat sequi iste sit magnam
              quibusdam, laudantium non, animi accusantium earum nesciunt,
              consequuntur praesentium reprehenderit excepturi ducimus quis
              fugit ipsa. Quis suscipit ipsa recusandae voluptatem culpa illum
              eum tenetur dicta vero voluptates neque qui beatae mollitia
              sapiente deleniti impedit quae commodi assumenda illo, eligendi
              repellendus velit enim! Fuga corrupti harum id suscipit ratione
              dolores cupiditate ipsum distinctio provident pariatur quas
              voluptatum repellat in, impedit labore quis possimus aliquam
              laudantium sapiente esse minus? Vitae reprehenderit qui
              dignissimos velit nulla. Porro delectus id, ullam sed rem fugit
              odio eaque pariatur quod placeat nemo, inventore molestiae sunt
              itaque magni perferendis aut a! Consequatur, libero dolor quis,
              animi ad nesciunt, corrupti voluptas aliquid praesentium
              distinctio fugiat. Perspiciatis cupiditate hic reprehenderit a
              ratione distinctio eveniet iusto sed excepturi. Odit voluptatum
              nisi sint, nam nesciunt ab debitis mollitia laborum expedita
              consequuntur vel fugiat rem rerum est, recusandae illo laboriosam
              possimus neque dolor molestias! Quidem est deserunt consequatur,
              similique doloribus voluptate. At, dicta explicabo recusandae est
              hic voluptate fugit quas qui nobis, omnis fugiat cumque, sunt
              dolorem ipsa officia quasi expedita nulla accusamus sit
              praesentium distinctio molestiae. Facere, hic quidem voluptatum
              rem praesentium in repellendus dolor, architecto earum quae
              laboriosam error ut et molestiae perferendis, recusandae unde
              quibusdam veritatis quas assumenda? Illo corporis voluptatibus
              temporibus ratione eum quasi porro? Voluptas tempore quas
              doloremque laborum id facilis perferendis provident ipsam
              asperiores exercitationem. Consequatur sed vero exercitationem
              delectus. Sit, dolores at provident quasi dolorem, laborum commodi
              aliquid possimus vitae deserunt illo a pariatur voluptatum maxime.
              Excepturi, ratione nostrum eligendi quis culpa assumenda est enim
              aliquam aliquid voluptatum libero doloremque dolorem! Eos
              exercitationem incidunt magnam ab eligendi animi, deserunt,
              suscipit facilis modi minima deleniti fuga quae consequuntur illum
              ipsum maxime molestias repudiandae voluptatum impedit blanditiis.
              Dolores consequuntur sed dolorem voluptatem odit fuga sapiente
              perferendis necessitatibus doloremque vero nisi quae labore
              incidunt, temporibus tenetur cum ad magnam voluptatibus qui veniam
              commodi dolore, in accusantium. Natus nulla excepturi, blanditiis
              hic eaque debitis quae doloremque officia neque fugit iusto
              incidunt libero aliquam quos aspernatur dicta repudiandae
              quisquam? Quas aut doloribus voluptates nobis voluptatem vero
              veniam?
            </p>
          </div>
          <div className={articleStyles.postfooter}>
            <div className={articleStyles.rating}>
              <div>
                <p>0</p>
                <img src={like} alt="" id={articleStyles.rate} />
              </div>
              <div>
                <p>5</p>
                <img src={dislike} alt="" id={articleStyles.rate} />
              </div>
            </div>
            <Link to={"/news"}>
              <button id={articleStyles.read}>BACK</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
