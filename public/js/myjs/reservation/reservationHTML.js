export var reservationListFullHTML = `<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>예약 정보관리</h2>
    <ol class="breadcrumb">
      <li>
        <a href="#">홈 - </a>
      </li>
      <li>
        <a>예약 - </a>
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
            <label class="control-label" for="OrderNo">예약손님</label>
            <input type="text" class="form-control" name="reservation_customer_name" id="reservation_customer_name" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="OrderName">담당 디자이너</label>
            <input type="text" class="form-control" name="reservation_designer_name" id="reservation_designer_name" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="MobileNo">완료상태</label>
            <input type="text" class="form-control" name="reservation_state" id="reservation_state" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary">조회</button>
        <a href="#" type="button" class="btn btn-info">신규</a>
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
                  <th width="15%">손님</th>
                  <th width="20%">담당 디자이너</th>
                  <th width="20%">예약상태</th>
                  <th width="20%">메모</th>
                  <th width="20%">등록일시</th>
 
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
export var reservationAddFullHTML = `
<!--우측 콘텐츠 헤더영역 -->
<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>예약 추가</h2>
    <ol class="breadcrumb">
      <li>
        <a href="/main">홈 - </a>
      </li>
      <li>
        <a>예약 - </a>
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
            <label class="control-label">손님 이름</label>
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
            <label class="control-label">디자이너 이름</label>
            <input
              type="text"
              class="form-control"
              name="designer_name"
              id="designer_name"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">예약 상태</label>
            <input
              type="text"
              class="form-control"
              name="reservation_state"
              id="reservation_state"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">메모</label>
            <input type="text" class="form-control" name="memo" id="memo" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">시술 타입</label>
            <input
              type="text"
              class="form-control"
              name="cut_style"
              id="cut_style"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">가격</label>
            <input
              type="text"
              class="form-control"
              name="price"
              id="price"
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
            value="1990-03-11"
            name="reg_date"
            id="reg_date"
          />
        </div>
      </div>      
      </div>
      <div class="row">
      
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">시작시간</label>
          <input
            type="date"
            class="form-control"
            value="1991-03-11"
            name="reservation_start_date"
            id="reservation_start_date"
          />
        </div>
      </div>
      </div>
      <div class="row">
      
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">종료시간</label>
          <input
            type="date"
            class="form-control"
            value="1991-03-11"
            name="reservation_end_date"
            id="reservation_end_date"
          />
        </div>
      </div>

    </div>

      <div class="text-center">
        <button type="button" class="btn btn-primary" id="button-save">
          저장
        </button>
        <a href="#" type="button" class="btn btn-info">목록</a>
      </div>
    </div>
  </div>
</form>`;

export var reservationEditFullHTML = `

<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>예약 수정</h2>
    <ol class="breadcrumb">
      <li>
        <a href="#">홈 - </a>
      </li>
      <li>
        <a>예약 - </a>
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
          <label class="control-label">예약번호</label>
          <input
            type="text"
            class="form-control"
            value="testID_1"
            name="reservation_id"
            id="reservation_id"
            disabled
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">손님 이름</label>
          <input
            type="text"
            class="form-control"
            value="Test_손님이름"
            name="customer_name"
            id="customer_name"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">디자이너 이름</label>
          <input
            type="text"
            class="form-control"
            value="Test_디자이너이름"
            name="designer_name"
            id="designer_name"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">예약 상태</label>
          <input
            type="text"
            class="form-control"
            value="TEST_예약 상태"
            name="reservation_state"
            id="reservation_state"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">메모</label>
          <input
            type="text"
            class="form-control"
            value="TEST_memo"
            name="memo"
            id="memo"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">시술 타입</label>
          <input
            type="text"
            class="form-control"
            value="TEST_파마"
            name="cut_type"
            id="cut_type"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">등록일시</label>
          <input
            type="text"
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
          <label class="control-label">가격</label>
          <input
            type="text"
            class="form-control"
            value="10만"
            
            name="price"
            id="price"
          />
        </div>
      </div>      
    </div>

    <div class="row">
      
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">예약시작시간</label>
          <input
            type="date"
            class="form-control"
            value="1990-03-11"
            name="reservation_start_date"
            id="reservation_start_date"
          />
        </div>
      </div>
    </div>
    <div class="row">  
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">예약종료시간</label>
          <input
            type="date"
            class="form-control"
            value="1990-03-11"
            name="reservation_end_date"
            id="reservation_end_date"
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
