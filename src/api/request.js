import wepy from 'wepy'

const host = 'https://www.etzhang.xyz:8888'

// 接口
const uri = {
    // 用户信息
    getOpenId: '/getOpenId',
    getInfo: '/signIn',
    wxLogin: '/signUp',
    // 表白墙
    getConfessions: '/getMessageList',
    sendConfessions: '/postMessage',
    // 社团服务
    getClubs: '/getClubList',
    joinClub: '/applyForClub',
    hasAppliedClub: '/isInClub',
    getActivities: '/getActivityList',
    getUserActivities: '/getUserActivityList',
    joinActivity: '/applyForActivity',
    hasAppliedActivity: '/isAppliedActivity',
    createClub: '/createClub',
    createClubManager: '/createClubManager',
    isClubManager: '/isClubManager',
    getManagerClubList: '/getManagerClubList',
    getClubMembers: '/getClubMembers',
    deleteMember: '/deleteApplication',
    getApplyMembers: '/getClubApplications',
    consentApplication: '/approveApplication',
    rejectApplication: '/deleteApplication',
    getManageActivities: '/getClubActivityList',
    deleteActivity: '/deleteActivity',
    releaseActivity: '/createActivity',
    submitModification: '/updateActivityInfo',
    getParticipants: '/getActivityParticipate',
    deleteParticipant: '/deleteActivityParticipate' 
}

const request = async (params) => {
    params.url = host + params.url
    let ret = null
    console.log(params)
    await wepy.request({
        url: params.url,
        method: params.method,
        data: params.data
    }).then( (res) => {
        console.log(res)
        if(res.statusCode != 200){
            const msg = '服务器错误:' + res.statusCode 
            wepy.showToast({
                title: msg,
                icon: 'none',
                duration: 3000
            })
        }
        ret = res
    }).catch( (err) => {
        console.log(err)
        wepy.showToast({
            title: '请求发送失败', 
            icon: 'none',
            duration: 2000
        })
        ret =  null
    })
    return ret
}

const api = {
    host: host,
    uri: uri,
    request: request
}

export default api