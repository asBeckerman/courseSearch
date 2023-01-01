/**
 * A class used by Sidebar component to handle the search and filter functionality.
 *
 * Implement your own search and filter functionality here.
 *
 */

class SearchAndFilter {
  searchAndFilter(courses, search, subject, minimumCredits, maximumCredits) {
    let newCourses = [];
    //console.log(search);
    search = search.toLowerCase().trim();
    //console.log(search);
    for(let i =0;i<courses.length;i++)
    {
      //blank search
      if(search.trim()=="")
      {
        if(subject == "All")
        {  
         
         if(minimumCredits.trim()=="" && maximumCredits.trim()=="")
         {
  
            newCourses.push(courses[i]);
         }
         else if(courses[i].credits <= maximumCredits && minimumCredits.trim()=="")
         {
          newCourses.push(courses[i]);
         }
         else if(courses[i].credits >= minimumCredits && maximumCredits.trim()=="")
         {
          newCourses.push(courses[i]);
           
         }
         else if((courses[i].credits >= minimumCredits) && 
         (courses[i].credits <= maximumCredits))
         {
          newCourses.push(courses[i]);
         }
        }
      else if(courses[i].subject === subject)
        {
          //Credits empty
          if(minimumCredits.trim()=="" && maximumCredits.trim()=="")
          {
            newCourses.push(courses[i]);
          }
          //minimum empty
          else if(courses[i].credits <= maximumCredits && minimumCredits.trim()=="")
          {
            newCourses.push(courses[i]);
          }
          //maximum empty
          else if(courses[i].credits >= minimumCredits && maximumCredits.trim()=="")
          {
            newCourses.push(courses[i]);
          }
          //input max and min
          else if((courses[i].credits >= minimumCredits) && 
          (courses[i].credits <= maximumCredits))
          {
            newCourses.push(courses[i]);
          }
      }
      }
       else if(courses[i].description.toLowerCase().trim().includes(search.toLowerCase().trim())||
      courses[i].name.toLowerCase().trim().includes(search.toLowerCase().trim())
      ||courses[i].subject.toLowerCase().trim().includes(search.toLowerCase().trim()) || this.checkReqs(search,courses[i].requisites)
      ||this.checkSection(search,courses[i].sections)||this.checkKey(search,courses[i].keywords))
      {
        //console.log("Search:"+ search);
        if(subject == "All")
        {  
         if(minimumCredits.trim()=="" && maximumCredits.trim()=="")
         {
  
            newCourses.push(courses[i]);
         }
         else if(courses[i].credits <= maximumCredits && minimumCredits.trim()=="")
         {
          newCourses.push(courses[i]);
         }
         else if(courses[i].credits >= minimumCredits && maximumCredits.trim()=="")
         {
          newCourses.push(courses[i]);
           
         }
         else if((courses[i].credits >= minimumCredits) && 
         (courses[i].credits <= maximumCredits))
         {
          newCourses.push(courses[i]);
         }
        }
      else if(courses[i].subject === subject)
        {
          //Credits empty
          if(minimumCredits.trim()=="" && maximumCredits.trim()=="")
          {
            newCourses.push(courses[i]);
          }
          else if(courses[i].credits <= maximumCredits && minimumCredits.trim()=="")
          {
            newCourses.push(courses[i]);
          }
          else if(courses[i].credits >= minimumCredits && maximumCredits.trim()=="")
          {
            newCourses.push(courses[i]);
          }
          else if((courses[i].credits >= minimumCredits) && 
          (courses[i].credits <= maximumCredits))
          {
            newCourses.push(courses[i]);
          }
      }
    }
  }
    return newCourses;
  }

  checkSection(s,sect)
  {
    for(let i=0;i<sect.length;i++)
    {
      if(sect[i].location.toLowerCase().trim().includes(s)|| sect[i].instructor.toLowerCase().trim().includes(s))
      {
        return true;
      }
    }
    return false;
  }
  checkKey(s,key)
  {
    for(let i=0;i<key.length;i++)
    {
      if(key[i].toLowerCase().trim().includes(s))
      {
        return true;
      }
    }
    return false;
  }

  checkReqs(s,reqs)
  {
    //console.log(reqs);
    for(let i=0;i<reqs.length;i++)
    {
      //console.log(reqs[i]);
      if(reqs[i].includes(s))
      {
        return true;
      }
    }
    return false;
  }
}

export default SearchAndFilter;
