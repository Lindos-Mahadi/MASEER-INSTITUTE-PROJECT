import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Accordion, Card, Button, Header} from 'react-bootstrap';

let imgUrl = "https://images.unsplash.com/photo-1590075865003-e48277faa558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

const alignText={
    textAlign: 'justify',
    padding: '10px',
}

const CardHome = () =>{

    useEffect(() =>{
        AOS.init({duration: 2000,
            delay: 200,
            once: false,
            mirror: false,
        });
        // AOS.init();
    }, []);

    return(
      <React.Fragment>
            <section className="comp-card my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-white text-justify">
                            <h2 className="display-6 text-center" data-aos="fade-down" data-aos-delay="500">What is the Arabic Language?</h2>
                            <p className="lead" style={alignText} data-aos="fade-right" data-aos-delay="500">
                                Arabic is essential in understanding the Qur’an and Hadith which are the Arabic
                                language is a Semitic language that is primarily based upon three letter
                                root words. For example we say &quot;مَذْهَب&quot; ‘madh’hab’, this word comes
                                from the root- dhaal-haa’-baa’&quot;ذ – هـ - ب&quot; . This word is derived from the
                                root verb dha’haba&quot;ذَهَبَ&quot; .
                                The Arabic language is composed of different sciences. When someone
                                learns Arabic she/he must understand that she/he is in fact learning three
                                sciences. Realizing this separation between the various sciences assist the
                                student of Arabic in grasping the language. With this he will know where
                                the language begins and where it ends. The most important sciences of
                                Arabic Language for the understanding of the Quran and sunnah are three:
                                I. Nahw: It is most often translated as ‘grammar’. Nahw is a study of the
                                language and the various rules governing the words as they appear in a
                                sentence. I will now mention three sentences, please pay close attention.
                                I. الْكِتَابُ جَدِيْدٌ The book is new
                                II. يَقْرَأُ أَحْمَدُ الْكِتَابَ Ahmad is reading the book
                                III.

                                يَقْرَأُ أَحْمَدُ الْقِصَّةَ مِنَ الْكِتَابِ Ahmad is reading the story from
                                the book.
                                Here, the word “الْكِتَاب” is ended in three different ways –
                                1. “الْكِتَابُ” with dammah over the letter “ba”
                                2. الْكِتَابَ with fath’ha over the letter “ba”
                                3. الْكِتَابِ with kasra under the letter “ba”
                                    <a data-toggle="collapse" className="text-decoration-none" data-target="#demo">Read More ...</a>
                                    <div id="demo" class="collapse in">
                                        These three ending criteria provide different meanings in the sentences.

                                        II. Sarf: It is often translated as ‘morphology’. The actual meaning of sarf
                                        is: “The metamorphosing or changing of the ‘asl’ (base/root word) to
                                        many different examples so as to achieve meanings that could not
                                        otherwise be achieved.” The science of sarf is mostly relegated to verbs
                                        and that which derives from them. This change is done to stretch the
                                        meaning and to also make pronunciation easy upon the tongue.

                                        I. نَصْرٌ Helping, to help
                                        II. نَصَرَ – يَنْصُرُ He helped, He helps
                                        III. نَصَرَ – يَنْصُرُ = نَاصِرٌ Who is helper
                                        IV. نُصِرَ – يُنْصُرُ = مَنْصُوْرٌ Who is helped

                                        In simple words, sarf is the science of internal changes in Arabic words
                                        manipulating the original meaning
                                        III. Balaaghah: It is a science dealing with the eloquence of the Arabic
                                        language and how to convey proper meanings according to the situation.
                                        Balaaghah also deals with the meanings of words and they take shape in
                                        their different usage. Balaaghah is essential in fully understanding the
                                        Tafseer and I’jaaz (miraculous) nature of the Quran.
                                    </div>
                            </p>
                        </div>
                        <div className="col-md-6 mb-3 topic-img" data-aos="flip-left" data-aos-delay="500">
                            <img className="img-fluid float-right" src={imgUrl} alt="img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div id="accordion">
                            <div className="card border-info mb-1">
                                <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                                        <h3 className="text-white">Why Learn the Arabic Language?</h3>
                                    </button>
                                </h5>
                                </div>

                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <p className="lead">
                                        1. Arabic is essential in understanding the Qur’an and Hadith which are
                                            important parts of Islamic religion, in fact an inseparable part. To have the
                                            ability to read or recite (tilawah) the greatest divine book Al-Qur&#39;an is a big
                                            fortune. Ten rewards for each Qur&#39;anic alphabets from Allah (SWT) are in
                                            order for those who recite (tilawah) even if they do not understand the
                                            meaning. But, for those who have the grasp of meaning a greater reward
                                            from Allah (SWT) is in order because the recompenses for those who
                                            knows and those who doesn&#39;t are not equal. So, alongside learning to read
                                            or recite (tilawah) Al-Qur&#39;an, we should spend some time and put some
                                            effort into understanding the meaning specially those Ayats and Dua&#39;s
                                            which we read regularly. Millions of Muslims and native speakers around
                                            the world learn Arabic just to study and understand the Qur’an and Hadith.
                                            specially
                                        </p>
                                        <p className="lead">
                                        2. The high demand and low supply of English Arabic-speakers. Relatively few
                                            Americans attempt to learn Arabic. With the increasing influence of the
                                            Middle East in international affairs, there is an extreme shortage of workers in
                                            the United States that know the Arabic language and culture. People who
                                            study Arabic can find careers in various fields such as: Journalism, Business,
                                            Financial, Translation, Consulting etc.
                                        </p>
                                        <p className="lead">
                                        3. Arabic is the 5th largest spoken language in the world. Arabic is the official
                                            language of over 20 countries and there are well over 300 million native
                                            speakers of the language. These speakers are largely concentrated in the
                                            Middle East, but there are minority groups of native speakers throughout the
                                            world. It is also an official language of the United Nations, the Arab League,
                                            the Organization of Islamic Conference, and the African Union.
                                        </p>
                                        <p className="lead">
                                        4. Europe / America has an increasing Arab-American minority. According to
                                            the U.S. Census Bureau’s 2002 census, there are 1.2 million people of Arab
                                            heritage residing in the United States. Though a relatively small population,
                                            their numbers are quickly growing; people of Arab ancestry in the U.S.
                                            increased by about 40% during the 1990s. Intercultural understanding begins
                                            at home. Even just a basic knowledge of the Arabic language and culture can
                                            improve understanding and acceptance of this often misunderstood and
                                            misrepresented group of Americans.
                                        </p>
                                        <p className="lead">
                                        5. Arabic influence on products from around the world. The export of concepts,
                                            products, and cultural practices from Arabic-speaking peoples is evident in
                                            the vocabulary that Arabic has lent other languages. Algebra was invented by
                                            Arab mathematicians in medieval times. Such staple products as coffee and
                                            cotton came from the Arab world, as well as jasmine, lemon, and lime. Other
                                            Arabic loanwords appearing in English denote such diverse things as henna,
                                            macrame, lute, mattress, gerbil, sorbet, safari and muslin. The influence of
                                            Arabic culture is even apparent in the English language. I hope you take
                                            theses 5 reason to learn the Arabic language as you consider to learn Arabic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-info mb-1">
                                <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
                                        <h3 className="text-white">Learning Arabic-where do I start?</h3>
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        <p className="lead">
                                            Listed below are some concepts to ponder upon before considering any
                                            path of learning Arabic:
                                            <br/> You must understand Arabic in Arabic.
                                            <br/>- Being a self-translator is not the goal
                                            <br/>- There is no ‘one book ‘ that will teach you all of what you need to know
                                            of Arabic.
                                            <br/>- Non-Arabs have been learning Arabic for over 1,400 years from Africa
                                            to Indonesia so it is incorrect to assume that we cannot learn as they did
                                            in the past.
                                            <br/>- You will not learn Arabic by simply taking one part of the plan. What I
                                            mean is that if you learn grammar only you will not know Arabic. And
                                            if you learn new vocabulary only you will not really know Arabic.
                                            Rather you must take all of it.
                                            Where to begin? That is the question.

                                            The reality is that it is very difficult to learn Arabic for non–Arabs without
                                            a good teacher, determination, time, Arabs or Arabic speaking
                                            brothers/sisters to mix with and learn from association.

                                            The student should now learn basic grammar. The best books in this area
                                            for beginners are – Fundamental Quranic Grammar (by Maseer Institute),
                                            Attariqu ilal Arabiyyah, Madina Arabic.
                                            Fundamental Quranic Grammar (both nahw and sarf) is a small book
                                            outlining the fundamentals of grammar that are indispensable in
                                            understanding Arabic whether it is Quranic Arabic or any other aspect of
                                            Arabic Language. And the other two books mentioned above are very
                                            good medium for gathering primary vocabulary and foundation of applied
                                            grammar.

                                            After it we prefer ‘At-Tuhfah as-Sanniyyah bi Sharhil-Muqqadimatil-
                                            Ajrumiyyah’. One should study this book with a good teacher who will
                                            make him understand the fundamentals of the book without going into
                                            detailed discussions of grammar issues.
                                            As we said earlier, learning grammar is not enough, so you must also learn
                                            how to pick up words to increase your vocabulary. This part is the most
                                            time consuming, sometimes taking years to develop. Here are some
                                            practical advises in this regard:
                                            <br/>- You must read as much as you can. Start by reading small books on
                                            different issues in Arabic. Take a notepad and write the new words
                                            down. When you look up a word in the dictionary, underline it with a
                                            pencil. If you look up the word again in the future and see that you
                                            marked it with your pencil, you must memorize that word, as you will
                                            more than likely see it again and again. Don’t write the meanings of the
                                            words in English down in your book that you are reading. That is

                                            because you only read the meaning and not the actual word in Arabic
                                            this way.
                                            <br/>- You must also learn through listening. In this way you learn how
                                            Arabic is spoken and how certain ideas are conveyed. The best thing is
                                            to listen and act as if you understand everything you hear. If you cant
                                            find a speaker giving a talk then buy some tapes of the Scholars and
                                            Students of Knowledge. Some of the clearest speakers are Shaykh
                                            Muhammad al-Uthaymeen, Shaykh Muhammad al-Mukhtaar Ash-
                                            Shanqeetee, Shaykh Muhammad ali Ash-Shanqeetee, Shaykh
                                            Muhammad Al Arifi and Shaykh Nabil Iewadi.
                                            <br/>- Listen to the Qur&#39;an while attempting to understand.
                                            <br/>- Try to understand the Arabic language in Arabic. Don’t be like some
                                            people who only wish to translate everything into their own native
                                            tongue. This will take time but it is very important and will cause you to
                                            understand Arabic as it is.
                                            <br/>- Talk as much as you can to those Arabic speakers who can correct you
                                            and help you in learning. Also increase your fluency by talking in
                                            Arabic to your course partners.
                                            <br/>- The most important thing is to always read. If you don’t read you will
                                            not gain mastery over the language. You must read even if you don’t
                                            want to. Reading will give you a glimpse into the various sciences of
                                            the Deen and increase your vocabulary.
                                            <br/>- In the beginning make your primary focus understanding. Most of us
                                            will know more words that we can even think to mention in a
                                            conversation with an Arab. The same goes for English.

                                            <br/>- Stay away from non–Arabic books and lectures. For Learning Arabic.
                                            Because the best way to learn a language is to learn it through the same

                                            language. Cutting your ties with non–Arabic books and lectures will
                                            give you more determination to learn.
                                            How difficult is Arabic to Learn?
                                            Depending on your approach to learning Arabic can be a moderately hard
                                            language to learn if you don’t have the right mindset. You should always try to
                                            maximize your resources and time for the best learning experience possible.
                                            All languages evolve over time and Arabic is no exception. To indisputably
                                            understand the importance of the Arabic language you have to learn the actual
                                            language yourself to help to receive the full benefit of this amazing language
                                            later.
                                        </p>
                                </div>
                                </div>
                            </div>
                            <div className="card border-info mb-1">
                                <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree">
                                        <h3 className="text-white">Learn Arabic Fast</h3>
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <p className="lead">
                                            Five Easy techniques to Learn Arabic Rapidly
                                            Learning to speak Arabic can be quick and easy with our Arabic language
                                            courses and learning aids. If you are looking for an easy and efficient Arabic
                                            course then here is the good news. We have what’s right for you. Before you
                                            know it, you’ll be on your way to learning Arabic fast.
                                            Learn Arabic fast on the Go
                                            Having a busy life shouldn’t keep you from trying to learn Arabic fast. We offer
                                            several Arabic language courses that will allow you to learn to speak Arabic
                                            while driving, exercising, doing housework, etc. This means you can learn
                                            Arabic anywhere, anytime. The ease with which you’ll learn Arabic is amazing.
                                            Can I Really Learn Arabic Fast?
                                            The answer is YES! Learning Arabic is easier than ever with our full line of
                                            Arabic language courses and learning aids. Learning Arabic is not as hard as you
                                            might think. With all the available Arabic resources, you can learn while
                                            commuting, while watching TV or while sitting in front of the computer. If you

                                            want to learn to speak Arabic, there is no excuse to not. The world is at our
                                            fingertips and learning Arabic will help you better communicate with everyone.
                                            Here are 5 tips to Learn Arabic Fast:
                                        </p>

                                        <p className="lead">
                                            1. Keep setting Objectives
                                            Decide how many minutes each day you are going to set aside for your
                                            Arabic studies. Stick to this no matter what comes about. Setting a goal to
                                            study each day will help you more quickly achieve your goal to learn Arabic
                                            fast.
                                        </p>
                                        <p className="lead">
                                            2. Set a Daily Routine
                                            Know what time you are going to study Arabic each day. This is part of your
                                            goal setting but of equal importance to your success. Your time might be first
                                            thing in the morning. Or it might be on your evening commute home.
                                            Whatever the time is, stick to it.
                                        </p>
                                        <p className="lead">
                                            3. Write Down Arabic Words and Phrases
                                            Buy yourself a notebook to use for your Arabic studies. In your notebook take
                                            notes of the words or phrases that may be difficult for you to remember. Spell
                                            them out. Write their definition. You’ll be surprised with how much this will
                                            help you in your goal to learn Arabic fast.
                                        </p>
                                        <p className="lead">
                                            4. Collect Arabic Articles and Pictures
                                            Keep a folder and collect Arabic articles and pictures about the language and
                                            country you are learning about. You might find an article about Egypt or Iraq.
                                            Add those to your folder. The internet is full of Arabic language newspapers.
                                            Print off some articles to look over and see how many words you recognize.
                                        </p>
                                        <p className="lead">
                                            5. Have Fun Learning Arabic!
                                            There is no sense setting a goal to learn Arabic if you don’t have fun. Use
                                            your new language skills to practice with native Arabic speakers. And before
                                            you know it, you’ll be on your way to learning Arabic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-info mb-1">
                                <div className="card-header" id="headingFour">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour">
                                        <h3 className="text-white">Advanced study</h3>
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div className="card-body">
                                        <p className="lead">
                                            As for an advanced study of Arabic, one must traverse the following path:
                                            <br/>- In Arabic Language – Qassasul Ambiya, Alarabiyyatu linnashyiin –
                                            V5, V6, Arabic For All – V2, V3, (Full),
                                            <br/>- In grammar - Start with the book ‘‘Al-Aajroomiyyah’ explained by
                                            Shaikh Uthaimin (RH). This book is perhaps the best explanation of
                                            Al-Aajrumiyyah. After this book, learn the book, ‘Sharh Qatr an-
                                            Nada’ by Ibn Hishaam. After that if one likes he may study Alfiyyah
                                            Ibn Maalik. Another good book to read is ‘Jaami’ Duroos al-
                                            Arabiyyah’.
                                            <br/>- In Sarf - Start with the book “Mizan munshaib, Masadirul afal, ‘Binaa’
                                            al-Af’aal’. After that, move on to the book, ‘Al-Maqsood’. For more
                                            advanced study, learn the poem in Sarf entitled, ‘Laamiyah Al-Af’aal’
                                            by Ibn Maalik.
                                            <br/>- In Balaaghah - Start with the book ‘Al-Balaaghah al Muyassara’, ‘Al-
                                            Balaaghah al-Waadhihah’. After that one may study ‘Uqood az-
                                            Zimaam’ by as-Suyooti.
                                        </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
      </React.Fragment>
    );
  };
  
  export default CardHome;