import { useParams } from "react-router";

interface SkillPageProps {
   params?: string
}


type UrlParams = {
    id: string;
    technology: string
}


const SkillPage = ({params}: SkillPageProps) => { 
    const { id, technology } = useParams<UrlParams>();
    console.log(params);
    return <>
        <h1>{technology}</h1>
        <h2>{`Skill Id - ${id}`}</h2>
    </> 
}
export default SkillPage;