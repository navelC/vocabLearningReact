
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLoading} from "../../hooks"

const listItem = [{ "Home": ["phòng khách", "phòng ngủ", "kệ tủ", "bàn trang điểm"]}, "căn hộ & nhà ở", "Sản phẩm nội thất","Thiết bị phụ kiện bếp", "báo giá", "Show room", "video", "Xưởng sản xuất", "liên hệ"]
console.log(listItem)
const Menu = () => {
    return (
        <div className="menu">
            <div className="container no-space">
                {listItem.map( (item) => {
                    if(typeof item === 'object'){
                        console.log(item)
                        for(let key in item){
                            return (
                                <li key={item}>
                                    <a href="">{key}</a>
                                </li>
                            )
                        }
                    }
                    else{
                        return (
                            <li key={item}>
                                <a href="" >{item}</a>
                            </li>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Menu;