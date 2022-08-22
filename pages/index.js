import TagSkill from '../components/building/tagSkill';
import Container from '../components/container';

function Index() {
   return (
      <div>
         <Container title="Link Bio">
            <div className="flex flex-col mt-4">
               <h3 className="font-semibold text-3xl">Hello.</h3>
               <h5 className="font-semibold text-2xl uppercase">
                  Bayu Priyambada
               </h5>
               <span className="font-thin text-base mt-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
               </span>
               <div className="mt-4">
                  <TagSkill />
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Index;
