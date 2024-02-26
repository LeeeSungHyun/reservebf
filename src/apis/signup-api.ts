import httpUtil from "../utils/http-util";

interface SignUpParams {
  name: string;
  memberId: string;
  password: string;
  phone: string;
  team: string;
}

interface SignUpHeaders {
  [key: string]: string;
}

interface SignUpRequest {
  params: SignUpParams;
  headers: SignUpHeaders;
}

const SignUpApi = {
  // 로그인 요청
  async postLogin(params: {
    memberId: string;
    password: string;
  }): Promise<any> {
    return await httpUtil.post({
      url: "/api/member/login",
      data: { memberId: params.memberId, password: params.password },
    });
  },

  // 회원 조회(count)
  async getUser(memberId: string): Promise<any> {
    return await httpUtil.get({
      url: "/api/member/selectCountMember",
      params: { memberId: memberId },
    });
  },

  // 회원가입 요청
  async postSignUp(params: {
    name: string;
    memberId: string;
    password: string;
    phone: string;
    team: string;
  }): Promise<any> {
    return await httpUtil.post({
      url: "/api/member/addMember",
      data: {
        name: params.name,
        memberId: params.memberId,
        password: params.password,
        phone: params.phone,
        team: params.team,
      },
    });
  },

  // 예시
  // async getTemplateList({ params, headers }: SignUpRequest) {
  //   return await httpUtil.get({
  //     url: `/api/templates/${encodeURIComponent(params.comOrgId)}/select/${encodeURIComponent(params.delStatus)}`,
  //     headers,
  //     params,
  //   });
  // },
  // async deleteTemplate({ params, headers }: SignUpRequest) {
  //   return await httpUtil.delete({
  //     url: `/api/templates/${encodeURIComponent(params.rObjectId)}/delete`,
  //     headers,
  //     data: {
  //       rObjectId: params.rObjectId,
  //     },
  //   });
  // },
};

export default SignUpApi;
