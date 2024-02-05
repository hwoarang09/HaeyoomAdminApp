export var customerListFullHTML = `<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>손님 정보관리</h2>
    <ol class="breadcrumb">
      <li>
        <a href="#">홈 - </a>
      </li>
      <li>
        <a>손님 - </a>
      </li>
      <li class="active">
        <strong>조회</strong>
      </li>
    </ol>
  </div>
  <div class="col-lg-2"></div>
</div>


<div class="wrapper wrapper-content">
  <form >
    <div class="ibox-content m-b-sm border-bottom">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="OrderNo">손님 이름</label>
            <input type="text" class="form-control" name="customer_name" id="customer_name" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="OrderName">전화번호</label>
            <input type="text" class="form-control" name="telephone" id="telephone" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="MobileNo">멤버쉽</label>
            <input type="text" class="form-control" name="membership_state_code" id="membership_state_code" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary">조회</button>
        <a href="#"  type="button" class="btn btn-info">신규</a>
      </div>
    </div>
  </form>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-content">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th width="5%">#</th>
                  <th width="15%">이름</th>
                  <th width="15%">전화번호</th>
                  <th width="20%">가입유형</th>
                  <th width="15%">멤버쉽</th>
                  <th width="15%">담당 디자이너</th>
                  <th width="15%">등록일시</th>
 
                </tr>
              </thead>
              <tbody class="hoverTblBody">             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export var customerAddFullHTML = `
<!--우측 콘텐츠 헤더영역 -->
<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>손님 추가</h2>
    <ol class="breadcrumb">
      <li>
        <a href="/main">홈 - </a>
      </li>
      <li>
        <a>손님 - </a>
      </li>
      <li class="active">
        <strong>추가</strong>
      </li>
    </ol>
  </div>
  <div class="col-lg-2"></div>
</div>

<!--우측 콘텐츠 영역 -->
<form >
  <div class="wrapper wrapper-content">
    <div class="ibox-content m-b-sm border-bottom">
      <div class="row">
        
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">이름</label>
            <input
              type="text"
              class="form-control"
              name="customer_name"
              id="customer_name"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">전화번호</label>
            <input
              type="text"
              class="form-control"
              name="telephone"
              id="telephone"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">가입 유형 코드</label>
            <input
              type="text"
              class="form-control"
              name="entry_type_code"
              id="entry_type_code"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">멤버쉽 상태 코드</label>
            <input type="text" class="form-control" name="membership_state_code" id="membership_state_code" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">생년월일</label>
            <input
              type="date"
              class="form-control"
              name="birth_date"
              id="birth_date"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">등록일시</label>
            <input
              type="date"
              class="form-control"
              name="reg_date"
              id="reg_date"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">담당 디자이너</label>
            <input
              type="text"
              class="form-control"
              name="manage_designer"
              id="manage_designer"
            />
          </div>
        </div>

      </div>


      <div class="text-center">
        <button type="button" class="btn btn-primary" id="button-save">
          저장
        </button>
        <a href="#"  type="button" class="btn btn-info">목록</a>
      </div>
    </div>
  </div>
</form>`;

export var customerEditFullHTML = `

<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>손님 수정</h2>
    <ol class="breadcrumb">
      <li>
        <a href="#">홈 - </a>
      </li>
      <li>
        <a>손님 - </a>
      </li>
      <li class="active">
        <strong>수정</strong>
      </li>
    </ol>
  </div>
  <div class="col-lg-2"></div>
</div>

<!--우측 콘텐츠 영역 -->
<div class="wrapper wrapper-content">
  <form
    class="ibox-content m-b-sm border-bottom"
  >
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">고유번호</label>
          <input
            type="text"
            class="form-control"
            value="testID_1"
            name="customer_id"
            id="customer_id"
            disabled
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">이름</label>
          <input
            type="text"
            class="form-control"
            value="Test_name"
            name="customer_name"
            id="customer_name"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">전화번호</label>
          <input
            type="text"
            class="form-control"
            value="Test_01022883839"
            name="telephone"
            id="telephone"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">가입유형코드</label>
          <input
            type="text"
            class="form-control"
            value="TEST_가입유형코드"
            name="entry_type_code"
            id="entry_type_code"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">멤버쉽상태코드</label>
          <input
            type="text"
            class="form-control"
            value="TEST_멤버쉽상태코드"
            name="membership_state_code"
            id="membership_state_code"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">생년월일</label>
          <input
            type="date"
            class="form-control"
            name="birth_date"
            id="birth_date"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">등록일시</label>
          <input
            type="date"
            class="form-control"
            value="2021-03-11"
            disabled
            name="reg_date"
            id="reg_date"
          />
        </div>
      </div>
   
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">담당디자이너</label>
          <input
            type="text"
            class="form-control"
            value="TEST_담당디자이너"
            name="manage_desginer"
            id="manage_desginer"
            disabled
          />
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
      type="button"
        class="btn btn-primary"
        name="action"
        value="save"
        id="button-save"
      >
        저장
      </button>
      <button type="button" class="btn btn-danger" name="action" value="delete" id="button-delete">
        삭제
      </button>
      <a href="#" type="button" class="btn btn-info">목록</a>
    </div>
  </form>
</div>
`;
