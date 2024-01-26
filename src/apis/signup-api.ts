import httpUtil from "../utils/http-util";

interface SignUpParams {
  name: string;
  id: string;
  password: string;
  phoneNumber: string;
  affiliation: string;
  customAffiliation: string;
}

interface SignUpHeaders {
  [key: string]: string;
}

interface SignUpRequest {
  params: SignUpParams;
  headers: SignUpHeaders;
}

const SignUpApi = {
  // 회원가입 요청
  async postSignUp({ params, headers }: SignUpRequest) {
    return await httpUtil.post({
      url: "/signUp/create",
      headers,
      params,
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
