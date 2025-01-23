import xlsx from 'node-xlsx';
import { logger } from 'ee-core/log';

interface ExcelUser {
    card: string,
    username?: string,
}

/**
 * 刑侦反诈流程
 * @module XzfzService
 */
class XzfzService {

    /**
     * 解析xlsx文件
     */
    parseXlsx(path: string){
        const sheets = xlsx.parse(path);
        const sheet = sheets[0];

        // 获取表头和数据行
        const headers = sheet.data[0] as string[];
        const rows = sheet.data.slice(1);

        // 将数据行转换为 ExcelUser 对象数组
        const users: ExcelUser[] = rows.map((row) => {
            return {
                card: row[0] as string, // 第一列是 card
                username: row[4] as string | undefined, // 第二列是 username（可选）
            };
        });
        users.forEach(user => logger.info(`${user.card} ${user.username}`))
        // logger.info(`${users}`)
    }
}
XzfzService.toString = () => '[class XzfzService]';
const xzfzService = new XzfzService();
export {
    XzfzService,
    xzfzService
}