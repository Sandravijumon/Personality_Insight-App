import React from "react";
import "./PersonalityCards.css"; // Import the CSS file
import Navbar from "./Navbar";

const personalityData = [
  {
    title: "The Inspector (ISTJ Personality)",
    description:
      "ISTJs are serious, proper, and formal in appearance which can be intimidating. They are cultured and have an affection towards tradition. In contrast, they are quiet and usually calm.  They are called inspectors because of their keen attention to detail. ISTJ are rule followers who always take the logical approach towards their goals and projects.Their dominant cognitive function is introverted sensing which helps them take in the details about their environment while their auxiliary cognitive function is extraverted thinking which makes them efficient and logical thinkers.In their relationships, they are very loyal to their friends and family members. Usually, they have a small circle with who they prefer spending their time with. The ISTJ thrives in jobs that require structure, logic, and stability.",
    image:
      "https://i.pinimg.com/236x/98/fd/40/98fd40700cd08ca2605b946808de7a22.jpg",
  },

  {
    title: "The Counselor (INFP Personality)",
    description:
      "INFJs are visionaries who have a different view of the worldThey love introspection and refuse to take things at a surface level. They could be termed weird by others because of how they see life. The INFJ are idealists who love understanding complex issues. They are reserved leaders who are usually creatives due to how easily they get inspired.Also known as the diplomats, the INFJ prefers to cooperate with members of their team as opposed to conflict.The dominant cognitive function of an INFJ is introverted intuition which helps them focus on internal insights and generally influences their decision-making. Their tertiary cognitive function is an extraverted feeling which makes them highly sensitive to the feeling of others or what others refer to as being empathetic.The INFJ thrives in jobs that require a deal of compassion, psychology, and/or collaboration.",
    image:
      "https://i.pinimg.com/474x/e2/3f/47/e23f4796da627ba8c4254ee59ad35425.jpg",
  },
  {
    title: "The Mastermind (INTJ Personality)",
    description:
      "INTJs are introverts who are comfortable being by themselves. They would avoid socializing as it drains their energy. They excel at developing plans and strategies. As analytical problem solvers, this personality type is strategic and innovativeTheir dominant cognitive function is Introverted intuition which they use to read between the lines and unravel patterns. The auxiliary function is extraverted thinking which makes them deliberate about solutions and highly organized.Also known as the architects, the INTJ thrives in jobs that require logical systems and innovative solutions. They usually prefer to work alone. In relationships, they are loyal and are great at encouraging their partners. ",
    image:
      "https://i.pinimg.com/236x/d0/7f/ea/d07fea70afc395ded3849ad14c321a92.jpg",
  },
  {
    title: "The Giver (ENFJ Personality)",
    description:
      "ENFJs are individuals who are people-centered. They rely mostly on their intuition and feelings and tend to live through their imagination. They focus on abstracts and what could happen in the future.They are highly empathetic not just to their close friends and family but to people in general.The ENFJ generally loves feedback and they can be referred to as people pleasers.Their dominant cognitive function is an extraverted feeling that helps them be in tune with other people’s feelings. Their auxiliary functions are introverted intuition that makes them focus on the future as opposed to the present moment.They thrive in jobs where they can encourage others and push them to grow. This also includes humanitarian-focused jobs. In relationships, they are supportive and always willing to understand their partners",
    image:
      "https://i.pinimg.com/enabled/564x/57/e7/96/57e796fc3796da5075fb9e12989d313e.jpg",
  },
  {
    title: "The Craftsman (ISTP Personality)",
    description:
      "ISTPs are a mysterious, rational, and highly logical bunch. They are spontaneous and unpredictable most times albeit oblivious to those around them because they are experts at hiding their true nature.Their dominant cognitive function is introverted thinking which makes them focus on the logical aspect of a situation. The ISTP’s auxiliary cognitive function is extraverted sensing which helps them focus on abstract things.They thrive in jobs that require technical expertise and physical activity. In relationships, they are calm lovers who prefer being handy around the house",
    image:
      "https://i.pinimg.com/236x/2f/36/18/2f3618bd53d5106a5c14a12b43d7a4e8.jpg",
  },
  {
    title: "The Provider (ESFJ Personality)",
    description:
      "ESFJs are stereotypically known to be extroverts. They are cheerleaders and raise the spirits of those around them earning them popularity. Because of their nature, they are easily liked and people easily warm up to them.Their dominant cognitive function is an extroverted feeling which makes them work and make decisions based on their gut feeling. The ESFJ’s auxiliary cognitive function is introverted sensing which helps them focus on the present instead of the future or other abstract details.They thrive in jobs that require processes and interpersonal skills. In relationships, they are the traditional partners who believe in structure and stability.",
    image:
      "https://i.pinimg.com/enabled/236x/93/30/71/9330719b7ed9b47f7caecd4efd95d02b.jpg",
  },
  {
    title: "The Idealist (INFP Personality)",
    description:
      "INFPs are usually reserved and introverted. They usually spend time all by themselves in quiet places. They love analyzing signs and symbols and using them to draw inferences in explaining what is happening around them.Their dominant cognitive function is an introverted feeling which helps them with processing emotions internally. The INFP auxiliary cognitive function is the extraverted intuition that helps them focus on the big picture through imagination.They thrive in jobs that require visions and align with their goals/ interests. In relationships take time to select their friends and they are quite big on comprise. ",
    image:
      "https://i.pinimg.com/236x/82/2b/30/822b30a53f62b1d3ddbe241e39806f1e.jpg",
  },
  {
    title: "The Performer (ESFP Personality)",
    description:
      "ESFPs are mostly perceived to be entertainers. They enjoy being in the spotlight. They enjoy exploring and learning to share what they’ve learned with others through their strong interpersonal skills.Their dominant cognitive function is extraverted sensing which helps them stick to facts instead of abstract ideas. The ESFP’s auxiliary cognitive function is an introverted feeling which helps them make decisions.They thrive in work environments where they can be spontaneous, move around often, and involves the use of artistic values. In relationships, the ESFP will prioritize their family and loved ones over anything although they can also strongly dislike a structured life.",
    image:
      "https://i.pinimg.com/236x/8a/c8/3d/8ac83d29f7a352b3385a5e97848feaa5.jpg",
  },
  {
    title: "The Champion (ENFP Personality)",
    description:
      "ENFPs are highly individualistic and refuse to live their lives inside a box. They strive to create their own methods of doing things. They operate with their feelings and are highly perceptive and thoughtful.Their dominant cognitive function is extraverted intuition which allows them to focus on abstract thoughts and patterns. The auxiliary cognitive function is introverted feelings which make them focus on their feelings rather than logic.In relationships, the ENFP is always expressive and shares affection openly. They also thrive in jobs that demand creativity and imaginative solutions.",
    image:
      "https://i.pinimg.com/474x/b1/20/16/b120164e4fcb36c747cbb6dafc8f3c40.jpg",
  },
  {
    title: "The Doer (ESTP Personality)",
    description:
      "ESTPs are governed by the need to interact with others. They are interested in abstracts and theories. They are spontaneous and risk-taking. They aren’t afraid of making mistakes as they make them up as they go along.Their dominant cognitive function is extraverted sensing which makes them action-oriented. The auxiliary cognitive function of an ESTP is introverted thinking which makes them highly disciplined and very observant.They thrive in career paths that require mechanical skills, flexibility, and one that is quite unpredictable. In relationships, they can be quite adventurous and prefer activities with their loved ones.",
    image:
      "https://i.pinimg.com/236x/e0/12/6b/e0126b0e6d3dafeb76c4fd7cc63678c3.jpg",
  },
  {
    title: "The Supervisor (ESTJ Personality)",
    description:
      "ESTJs are organized and governed by the zeal to do what is right and socially acceptable. They epitomize the ideal individual who is on the track toward doing what is “good” and “right”. They are happy to be of help.Their dominant cognitive function is extraverted thinking which makes them quite practical when compared to other personality types. The auxiliary cognitive functions are introverted sensing which makes them very keen on details and stability.The ESTJs like to work in management positions where they can oversee operations and put in structures. In relationships, they love routines and their loved ones know that they can always be depended on for anything.",
    image:
      "https://i.pinimg.com/236x/ad/ad/f6/adadf624a87926e7c8ce92be64e3ce7e.jpg",
  },
  {
    title: "The Commander (ENTJ Personality)",
    description:
      "ENTJs focus on dealing with all things rationally and logically. They are naturally born leaders who command respect. They also do enjoy being in charge. They see obstacles as challenges in which they can prove themselves.Their dominant cognitive function is extraverted thinking which makes them deliberate about orders and judgments. The auxiliary function is introverted intuition which makes them trust their instincts during decision making.The ENTJ thrives in jobs that are complex and require clear strategies for goals. In relationships, they can set high expectations for their loved ones and can be sometimes domineering",
    image:
      "https://i.pinimg.com/736x/16/02/05/160205f40026b2f4f1aa1f5d8957180f.jpg",
  },
  {
    title: "The Thinker (INTP Personality)",
    description:
      "INTPs are typically known for their brilliant ideas and propositions. They see a pattern in everything and can easily pick out something that’s out of place. They are concerned with finding an environment where their creative genius can be harnessed.Their dominant cognitive function is introverted thinking which makes them highly understanding and deep thinkers. The auxiliary functions are extraverted intuition which helps with their imagination and inspiration.The INTP thrives in work environments that aren’t focused on traditions. They prefer flexible and independent work styles. In relationships, they are highly unconventional and autonomous.",
    image:
      "https://i.pinimg.com/236x/11/73/d7/1173d72bdc86b5ca0933020b93396a36.jpg",
  },
  {
    title: "The Nurturer (ISFJ Personality)",
    description:
      "ISFJs are highly generous and ever-ready to give back to society. They are warm and kind-hearted individuals. They possess an awareness and consideration towards bringing out the best in others.The dominant cognitive function is introverted sensing which makes them very detail-oriented. Their auxiliary functions are extraverted feelings which makes them nurturing and very considerate.They thrive in jobs that require structure and are positioned behind the scenes. In relationships, the ISFJ will take care of their loved ones unconditionally.",
    image:
      "https://i.pinimg.com/236x/ed/2a/c8/ed2ac8e565c35e6a4518bd3c2efe648e.jpg",
  },
  {
    title: "The Visionary (ENTP Personality)",
    description:
      "ENTPs are extroverts who do not enjoy small talk. These personalities are very rare to come across. They have a logical and rational approach to discussions and/or arguments. They are knowledgeable but need constant stimulation.Their dominant cognitive function is extroverted intuition which makes them always open to exploring new ideas. The auxiliary function is introverted thinking which makes them quite logical.They thrive in jobs where creativity meets challenges. In relationships, the ENTP is spontaneous and can be quite exciting.",
    image:
      "https://i.pinimg.com/236x/8f/75/e1/8f75e180665121bde5647923ba5f157c.jpg",
  },
  {
    title: "The Composer (ISFP Personality)",
    description:
    "ISFPs on the outside seem like introverts but deep down they’re warm and very friendly. They are spontaneous and fun to be with. They are always out to explore new things and discover new experiences.Their dominant cognitive function is an introverted feeling which makes them caring. The auxiliary functions are extraverted sensing which makes them appreciate works of art.ISFPs prefer to work independently away from the spotlight. In relationships,  they are accommodating and very easygoing",
    image:
    "https://i.pinimg.com/236x/b1/c5/f9/b1c5f9599165291f3f1c245c6e2e36f5.jpg", 
},
];

const PersonalityCards = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar/>
      <nav className="navbar">
        <h1 className="navbar-heading">The 16 Myer-Briggs Personality Types</h1>
      </nav>

      {/* The container for all personality cards */}
      <div className="cards-container">
        {personalityData.map((personality, index) => (
          <div key={index} className="personality-card">
            {/* Add the image element */}
            <img
              src={personality.image}
              alt={personality.title}
              className="card-image"
            />
            <h2 className="card-title">{personality.title}</h2>
            <p className="card-description">{personality.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityCards;
