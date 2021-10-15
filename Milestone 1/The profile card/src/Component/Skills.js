const Skills = () => {
    let a='SKILLS';
    const skills=['HTML','CSS','Sass','JS','React','Redux','Node','MongoDB','Python','Flask','Django','NumPy','Pandas',
                  'Data Analysis','MYSQL','GraphQL','D3.JS','Gatsby','Docker','Heroku','Git'];
    return ( 
        <div id="about" className='name'>
               <h3>{a}</h3>
               {skills.map((sk)=>
            <div id='skilled'>{sk}</div>
            )}
        </div>

     );
}
 
export default Skills;