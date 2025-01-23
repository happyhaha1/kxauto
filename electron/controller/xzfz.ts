import {xzfzService} from "../service/xzfz"

class XzfzController {

    parseXlsx(args: string) {
        // console.log(args)
        return xzfzService.parseXlsx(args)
    }

    start(args: string) {

    }
}

export default XzfzController