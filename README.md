# reactNative-firebase-todolist
<h2>About</h2>
<p>This wis a project I've recently been working on.  Although the todo list is a well-trodden path, the project allowed me to have a go with and start learning a lot of tools I haven't used before.</p>

<h2>Tools</h2>
<ul>
  <li>Figma design tools (see <a target="_blank" href="https://www.figma.com/file/VtdIdSTRVnJesQ4OQZmyf2/ToDoList?node-id=0%3A1">here)</li>
  <li>React-Native for mobile development</li>
  <li>Firebase auth and firestore</li>
 </ul>
 
<h2>Project Brief</h2>

<h4>MVP</h4>
 <ul>
  <li>A user should be able to:
    <ul>
      <li>Sign up, be verified over email, login to the app and reset password via email if needed.</li>
      <li>Create and delete lists.</li>
      <li>Create to do tasks within a list and set these tasks to 'completed' as required.</li>
      <li>Navigate to an account page from a tab navigator and sign out from the app.</li>
    </ul>
  </li>
  
  <h4>Possible Extensions</h4>
 <ul>
  <li>The user create a shared list and invite others to add to it or set tasks to completed.</li>
  <li>A calendar to add events to.</li>
  <li>A set of timers (pomodoro, alarms).</li>
 </ul>
 </ul>
 
 <h2>How to Run the App</h2>
  <ul>
    <li>Fork the repository and then clone it clone to local computer</li>
    <li>Open the project in Intellij and start the server via the file 'TractorFinderApplication'.</li>
    <li>You may need to change the path of the csv files we use to seed the database.  These can be found in 'components/DataLoader.js' on lines 63 and 87.</li>
  <li>cd into the 'client folder'</li>
  <li>npm install</li>
  <li>npm start</li>
  </ul>
  
  <h2>What I learned</h2>
  <ul>
    <li>We used the outdated version of React-Google-Maps, which led to have to use an older version of React.  This then led to compatibility issues with some other libraries.  I would read about the versions more carefully on a future app!<li>
    <li>I've done the previous projects with vanilla CSS, and while it's been good to learn it and understand a little about making sites responsive, Bootsrap and other frameworks are more efficient and I will use them in future.  We choise Bootsrap over Material UI as I was more familiar with it, but I'll definitely give a different framework another go next time.</li>
    <li>Libraries are extremely powerful and I need to always consider if there is a library for what I'm about to do(There usually is!).</li>
    <li>Spring is very powerful!  I guess it's more Spring Boot that we used, but the ease with which you can generate SQL queries and access the data is something I'm looking forward to playing about with more.  My next project will have a more complex backend with more realtionships to navigate, and I'm sure Spring will help with that.</li>
    <li>Learing how to get data from the csv files into our database took us a long time, but it was worth it in the end and I'm sure something we'll need to do again in the future</li>
  </ul>
  
  <h2>What I would do differently</h2>
  <ul>
    <li>As mentioned above, I'd take more time before getting started to research different libraries and read about the versions.  It feels like it's time when you could have started coding but at worst I think you'll end up achieving the same amount but will likely have a better product than diving into the code. </li>
    <li>There's always more if you had more time.  As a small team, we're OK with what we achieved as the brief for this app was somewhat limited.  If this was something that could be integrated with the auction site, and give us access to things such as the information for each specific tractor being sold, we could generate an automated inspector booking system.</li>
  </ul>
