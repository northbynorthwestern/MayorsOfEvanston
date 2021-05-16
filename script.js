let currentpage = 0; //initialize the currentpage variable

function change(page) {
  //using a template literal format, which allows you to add variables easily
  document.getElementById(
    "content"
  ).innerHTML = `<div class="intro"><div class="col"> <img class="portrait" src=${images[page]}> </div>
        
        <div class="intro-text">
        <h1> ${headertitles[page]}
          </h1> <h2 class="tenure"> <em>TENURE:</em> ${tenure[page]}</h2>  </div></div> <div id="article-wrapper" class="article-text"> ${paragraphs[page]}
          </div>
          <div onclick="back()" class="next triangle-left"></div> `;

  //to figure out what next button to show
  if (page == headertitles.length - 1) {
    document.getElementById(
      "content"
    ).innerHTML += `<button onclick="restart()" class="restart">RESTART</button>`;
  } else {
    document.getElementById(
      "content"
    ).innerHTML += ` <div onclick="next()" class="next triangle-right"></div>`;
  }
}

function back() {
  if (currentpage == 0) {
    document.getElementById("content").innerHTML = original;
  } else {
    let nextpage = currentpage - 1;

    currentpage = nextpage;

    change(nextpage);
  }
}

function next() {
  let nextpage = currentpage + 1;
  currentpage = nextpage;
  change(nextpage);
}

function restart() {
  currentpage = 0;
  document.getElementById("content").innerHTML = original;
}

headertitles = [
  "LORRAINE MORTON",
  "ELIZABETH B. TISDAHL",
  "STEVE HAGERTY",
  "DANIEL BISS",
];
tenure = [
  "DECEMBER 8, 1993 – MAY 11, 2009",
  "MAY 11, 2009 – MAY 8, 2017",
  " MAY 8, 2017 – MAY 10, 2021 ",
  "MAY 10, 2021 – ",
];

paragraphs = [
  //lorraine morton
  "<p> Lorraine Morton made history as Evanston’s first Black mayor (and the longest serving one!), but her legacy breaking barriers didn’t start when she became mayor. As a college student studying at Northwestern, Morton lived with five other Black students on Lake Street because Black students were barred from living on campus. Morton went on to spearhead desegregation efforts in Evanston, becoming the <a href='https://www.chicagotribune.com/news/ct-xpm-2009-02-02-0902010309-story.html' target='_blank'>first Black teacher </a>to break the color barrier in Evanston’s segregated public schools.</p> <p>In 1993, Lorraine Morton won her first mayoral race with 52% of the vote against Ann Rainey (who actually just lost her 8th Ward election in 2021 after calling her Black opponent, Devon Reid, “very scary”). Morton, as the town’s first Democratic mayor, won on a platform of building bridges. During her 16-year tenure, she was known for having improved the relationship between Northwestern and Evanston.</p> <p>Morton was also known to mentor the city’s youth. If someone got in trouble, <a href='https://dailynorthwestern.com/2018/09/25/city/lorraine-morton-remembered-as-a-teacher-for-life-stalwart-of-the-community/' target='_blank'> she’d invite them over to her house </a> and offer them coke, iced tea and advice.   </p> <p>Both Evanston and Northwestern have honored her legacy: Evanston’s civic center was renamed the Lorraine H. Morton Civic Center when she retired in 2009, and Northwestern offers a scholarship called the Lorraine H. Morton Scholarship for the Master of Science in Education Program in SESP.</p> <p>Morton died in 2018 at age 99. At her funeral, Dr. Rev. Larry Bullock said this during his eulogy:   </p> <p>“Dr. Evans gave the town the name. Mama Morton gave the town its soul.”</p>",

  //elizabeth tisdahl
  "<p>Elizabeth Tisdahl had a long history of civic engagement before her run as mayor. She helped found the Mothers Against Gangs School Liaison in 1987 and spent 12 years on the Evanston Township High School Board of Education. </p><p>Tisdahl ran her mayoral campaign on three major platforms: “Diversity, Sustainability, and Economic Development.” However, Northwestern alumni likely know her best for closing down The Keg of Evanston – once considered by Complex magazine as the ninth best college bar in America – after 17 people were arrested for underage drinking in one night. (The Keg was also the site of a shooting in 2005, but city officials only temporarily took the bar’s liquor license away in response).</p><p><a href='https://dailynorthwestern.com/2013/03/29/top-stories/the-keg-of-evanston-closing-sunday/' target=‘_blank’> Tisdahl told students closing the bar was “one of the best things” she’s ever done. The Keg’s owner, Tom Migon, told The Daily “the mayor ruined me.” </a></p><p>Tisdahl is also the one who proposed enforcing Evanston’s infamous “brothel law,” making it illegal for more than three unrelated people to live together.</p><p>Outside of her rocky relationship with Northwestern, Tisdahl is known for her series of anti-gang programs, such as a gun buy-back initiative. </p>",

  //steven hagerty
  "<p>A businessman who was previously president of Evanston’s Chamber of Commerce, Hagerty won his first mayoral election by only 115 votes, despite being endorsed by former mayors Morton and Tisdahl and raising more than all four other candidates in the race combined (half of which was Hagerty’s own). </p><p>Hagerty won <a href='https://dailynorthwestern.com/2017/04/05/city/steve-hagerty-claims-victory-in-evanston-mayoral-race/' target='_blank'>campaigning on three issues</a>: economic development, youth development and affordable housing. Hagerty supported increasing the minimum wage during his campaign, but after taking office, he <a href='https://patch.com/illinois/evanston/evanston-mayor-steve-hagerty-calls-emergency-meeting-block-minimum-wage-increase' target='_blank'>called an emergency meeting</a> to stop the minimum wage hike from $10 to $13, calling it a “fiscal danger to Evanston’s businesses.” </p><p>In an <a href='https://content.govdelivery.com/attachments/ILEVANSTON/2020/11/01/file_attachments/1588694/Hagerty%20Letter%20to%20Schapiro%20-%20Oct%2031%20Protests.pdf' target='_blank'>open letter about Northwestern Community Not Cops protests</a> to Northwestern President Morton Schapiro, Hagerty said he doesn’t support property damage by protesters and expected Northwestern to cover the “tens of thousands” of dollars the protests supposedly cost the city. He also claimed the protests were “ironic” because Evanston’s reparations fund shows the town is working to support Black residents. (The reparations fund <a href='https://northbynorthwestern.com/reparations-housing-program-fuels-discussion-on-how-to-move-forward/' target='_blank'>has been criticized by Black Lives Matter activists</a> in Evanston as not truly being reparations, as the money is being given out through a housing program, not cash payments.) </p><p>In February, Hagerty <a href='https://dailynorthwestern.com/2021/02/24/city/mayor-hagerty-received-vaccine-as-a-frontline-worker/' target='_blank'>announced he received a COVID-19 vaccine</a> as a “frontline worker” in Phase 1B. Hagerty said no other elected officials under 65 received a vaccine.</p><p>Hagerty decided not to run for a second term, becoming the first mayor since 1941 to serve a single term. (Some election attorney have said that <a href='https://patch.com/illinois/evanston/evanston-together-violated-campaign-finance-laws-filing-suggests' target='_blank'>he violated campaign finance laws</a> as a top donor to Evanston Together LLC, a dark money group).</p>",

  //daniel biss
  "<p>Daniel Biss is a former Assistant Professor of Mathematics at the University of Chicago. Biss previously served in the Illinois Senate and the Illinois House of Representatives. During his political career before running for Evanston mayor, Biss sponsored a ranked-choice ballot bill and another bill that would automatically register anyone who applies for an Illinois driver’s license to vote. </p><p>During his mayoral campaign, Biss received over 100 endorsements, including from Hagerty and Tisdahl. He won in a landslide victory with over <a href='https://dailynorthwestern.com/2021/02/23/city/daniel-biss-to-become-evanstons-next-mayor/' target='_blank'>73 percent</a> of the vote, taking all but one of Evanston’s 50 voting precincts.</p><p>In a <a href='https://dailynorthwestern.com/2021/04/08/city/daniel-biss-discusses-policing-racial-equity-and-town-gown-relations-in-northwestern-forum/' target='_blank'>Northwestern forum in April</a>, Biss said the biggest issues facing Evanston are affordable housing, public safety and policing. He told students he doesn’t support police abolition, but “respects the work of abolitionists.” <a href='https://dailynorthwestern.com/2021/01/25/city/mayoral-candidate-biss-advocates-for-less-spending-on-police-additional-transparency-around-up-nipas/' target='_blank'>Biss supports spending less on the police</a> and said he planned to move some responsibilities, such as traffic incidents and mental health crises, away from EPD. Biss also said it’s a “little weird” that Northwestern, as a private university, has a police department, and called NUPD’s presence helpful but “problematic.”</p> <p>On May 7, 2021, Biss <a href='https://www.chicagotribune.com/sports/college/ct-northwestern-protest-athletic-director-20210508-eykbh32s4vcunlq56su7yfstci-photogallery.html' target='_blank'>attended a protest</a> by Northwestern students and faculty against the hiring of athletic director Mike Polisky, one of four defendants in a sexual assault case brought by a former Northwestern cheerleader, Hayden Richardson. Biss said he believes Northwestern should rescind the hire.</p>",
];

images = [
  "https://i.ibb.co/PtQPPp5/morton.png",
  "https://i.ibb.co/VvZXkfN/tisdahl.png",
  "https://i.ibb.co/zxGGyrT/hagerty.png",
  "https://i.ibb.co/Y86YHCP/biss.png",
];

//the original HTML for when the user wants to either go back to the first page, or restart
original = `<div id="wrapper" style="margin-top: 50px">
        <div class="header" style="padding-bottom: 0px">
        <h1>30-ish Years of Evanston Mayors</h1>
        <h2 class="author">By Grace Deng</h2>
      </div>
      <div class="text">
        <p>
        Yesterday, Evanston officially swore in a new mayor, former state senator Daniel Biss. To mark the occasion, we’re taking you through 30 (ish) years of Evanston mayors. 
      
        </p>
        <img
          src="https://i.ibb.co/JkcLv7M/Evanston-Mayors-05-1.png"
          alt="Image of the 4 Evanston mayors Lorraine Morton, Elizabeth
        Tisdahl, Daniel Biss, and Steven Hagerty"
        />
      </div>
      <!--when you click this button, it will call the changepage function on the first page-->
      <div onclick="change(0)" class="next triangle-right"></div>
      </div>
<h3 style="text-align: center; margin-top: 20px; font-family: 'PT Sans'">
        Graphics by Jess Chen & Developed by Amy Guo
      </h3>
      `;
