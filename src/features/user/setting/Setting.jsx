import React, {useEffect, useState} from 'react';
import Header from "../../common/Header/Header";
import HeaderNav from "../../common/Header/HeaderNav";
import {GlobalStyle} from "../newpwd/style";
import Layout from "../../common/Layout";
import {GlobalSection} from "./style";
import emojiRegex from 'emoji-regex';

const Setting = () => {
  const [settingsState, setSettingsState] = useState({
    nicknameSet: false,
    birthSet: false,
    genderSet: false,
    emojiSet: false,
    jobSet: false,
    likeSet: false,
    passwordSet: false
  });
  const [textValue, settextValue] = useState({
    nickname: "",
    birth: "",
    gender: "",
    emoji: "",
    job: "",
    password: "",
    passwordConfirm: ""
  });

  const [interests, setInterests] = useState({
    culture: false,
    interior: false,
    animal: false,
    travel: false,
    activity: false,
    economy: false,
    issue: false,
    food: false,
    relation: false,
    environment: false,
    science: false,
    rights: false,
  });

  const maxInterests = 3;

  const handleChange = (event) => {
    const {name, value, checked} = event.target;
    const numInterests = Object.values(interests).filter(Boolean).length;
    const regex = emojiRegex();
    if (name === 'birth') {
      const re = /^[0-9\b]+$/;
      if (value === '' || re.test(value)) {
        settextValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else if (name in interests) {
      if (checked && numInterests < maxInterests) {
        setInterests((prevState) => ({...prevState, [name]: checked}));
      } else if (!checked) {
        setInterests((prevState) => ({...prevState, [name]: checked}));
      } else {
        alert(`최대 ${maxInterests}개까지만 선택할 수 있습니다.`);
      }
    } else if(name ==='emoji'){
      if (regex.test(value)) {
        settextValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      } else {
        alert('유효하지 않은 입력입니다. 이모지만 입력 가능합니다.');
      }
    } else{
      settextValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const toggleSetting = settingName => {
    setSettingsState(prevState => ({
      ...prevState,
      [settingName]: !prevState[settingName]
    }));
  };

  useEffect(() => {
    console.log(textValue, interests);
  }, [textValue, interests])

  return (
    <Layout>
      <Header>
        <HeaderNav/>
      </Header>
      <GlobalStyle/>
      <GlobalSection className="setting">
        <header className="setting-head">
          <h1 className="setting-head-title" hidden>프로필 설정</h1>
          <p className="setting-head-description">sniperad 뉴니커,<br/>어떤 사람인지 더 알고 싶어요!</p>
        </header>
        <div className="setting-body">
          <h2 className="setting-body-heading">뉴니커 정보</h2>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">닉네임</h2>
            <div className="setting-row-value">
              {!settingsState.nicknameSet ? (<>
                  <div style={{fontSize: "1rem"}}>닉네임</div>
                  <span className="setting-row-change" onClick={() => toggleSetting('nicknameSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <div className="textfield">
                        <input
                          type="text"
                          name="nickname"
                          className="textfield-input"
                          placeholder="닉네임"
                          value={textValue.nickname}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">
                        변경하기
                      </button>
                      <button
                        type="button"
                        className="setting-row-foot-cancel teriary-button"
                        onClick={() => toggleSetting('nicknameSet')}
                      >
                        취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">출생년도</h2>
            <div className="setting-row-value">
              {!settingsState.birthSet ? (<>
                  <div style={{fontSize: "1rem"}}>고슴이는 두살인데 sniperad 뉴니커는 몇 살이슴</div>
                  <span className="setting-row-change" onClick={() => toggleSetting('birthSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <div className="textfield">
                        <input
                          type="text"
                          name="birth"
                          className="textfield-input"
                          placeholder="출생년도"
                          value={textValue.birth}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">
                        변경하기
                      </button>
                      <button
                        type="button"
                        className="setting-row-foot-cancel teriary-button"
                        onClick={() => toggleSetting('birthSet')}
                      >
                        취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>

          </div>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">성별</h2>
            <div className="setting-row-value">
              {!settingsState.genderSet ? (<>
                  <div style={{fontSize: "1rem"}}>고슴이는 성별을 밝히고 싶지 않슴!</div>
                  <span className="setting-row-change" onClick={() => toggleSetting('genderSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <div className="textfield">
                        <select name="gender" className="textfield-input" value={textValue.gender}
                                onChange={handleChange}>
                          <option value="E">기타</option>
                          <option value="W">여성</option>
                          <option value="M">남성</option>
                        </select>
                      </div>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">
                        변경하기
                      </button>
                      <button
                        type="button"
                        className="setting-row-foot-cancel teriary-button"
                        onClick={() => toggleSetting('genderSet')}
                      >
                        취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
          <small style={{display: "block", margin: "2rem 0px 0.5rem"}}>
            데스크탑에서 이모지는
            <a href="https://emojipedia.org/unicode-8.0/" target="_blank" rel="noopener noreferrer" style={{
              textDecorationSkipInk: "auto",
              color: "#ff6b00"
            }}>여기에서</a>
            복사 붙여넣기!
          </small>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">이모지</h2>
            <div className="setting-row-value">
              {!settingsState.emojiSet ? (<>
                  <div style={{fontSize: "1rem"}}>🦔</div>
                  <span className="setting-row-change" onClick={() => toggleSetting('emojiSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <div className="textfield">
                        <input
                          type="text"
                          name="emoji"
                          className="textfield-input"
                          placeholder="이모지"
                          value={textValue.emoji}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">
                        변경하기
                      </button>
                      <button
                        type="button"
                        className="setting-row-foot-cancel teriary-button"
                        onClick={() => toggleSetting('emojiSet')}
                      >
                        취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">직업</h2>
            <div className="setting-row-value">
              {!settingsState.jobSet ? (<>
                  <div style={{fontSize: "1rem"}}></div>
                  <span className="setting-row-change" onClick={() => toggleSetting('jobSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <div className="textfield">
                        <select name="job" className="textfield-input" value={textValue.job} onChange={handleChange}>
                          <option value="middlehigh">학생(중/고등)</option>
                          <option value="university">학생(대학/대학원)</option>
                          <option value="media">미디어/언론</option>
                          <option value="it">IT/스타트업</option>
                          <option value="education">교육</option>
                          <option value="specialized">전문직/프리랜서</option>
                          <option value="ngo">비영리</option>
                          <option value="public">공기업</option>
                          <option value="private">일반기업</option>
                          <option value="ready">무직/취업중비중</option>
                        </select>
                      </div>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">
                        변경하기
                      </button>
                      <button
                        type="button"
                        className="setting-row-foot-cancel teriary-button"
                        onClick={() => toggleSetting('jobSet')}
                      >
                        취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">관심분야</h2>
            <div className="setting-row-value">
              {!settingsState.likeSet ? (<>
                  <div style={{fontSize: "1rem"}}>고슴이는 밀웜에 관심있슴!</div>
                  <span className="setting-row-change" onClick={() => toggleSetting('likeSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <legend aria-hidden="true" style={{fontWeight: "normal"}}>
                        <p style={{margin: "0px 0px 0.5rem"}}>최대 3가지 관심분야를 선택해주세요.</p>
                      </legend>
                      <div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="culture" name="culture" value="" onChange={handleChange}
                                 checked={interests['culture']}/>
                          <label htmlFor="culture">문화/예술</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="interior" name="interior" value="" onChange={handleChange}
                                 checked={interests['interior']}/>
                          <label htmlFor="interior">인테리어</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="animal" name="animal" value="" onChange={handleChange}
                                 checked={interests['animal']}/>
                          <label htmlFor="animal">반려동물</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="travel" name="travel" value="" onChange={handleChange}
                                 checked={interests['travel']}/>
                          <label htmlFor="travel">여행</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="activity" name="activity" value="" onChange={handleChange}
                                 checked={interests['activity']}/>
                          <label htmlFor="activity">액티비티/피트니스</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="economy" name="economy" value="" onChange={handleChange}
                                 checked={interests['economy']}/>
                          <label htmlFor="economy">경제</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="issue" name="issue" value="" onChange={handleChange}
                                 checked={interests['issue']}/>
                          <label htmlFor="issue">시사</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="food" name="food" value="" onChange={handleChange}
                                 checked={interests['food']}/>
                          <label htmlFor="food">푸드</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="relation" name="relation" value="" onChange={handleChange}
                                 checked={interests['relation']}/>
                          <label htmlFor="relation">관계/모임</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="environment" name="environment" value="" onChange={handleChange}
                                 checked={interests['environment']}/>
                          <label htmlFor="environment">환경</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="science" name="science" value="" onChange={handleChange}
                                 checked={interests['science']}/>
                          <label htmlFor="science">과학</label>
                        </div>
                        <div className="checkbox undefined">
                          <input type="checkbox" id="rights" name="rights" value="" onChange={handleChange}
                                 checked={interests['rights']}/>
                          <label htmlFor="rights">여성/젠더/인권</label>
                        </div>
                      </div>
                      <br/>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">변경하기</button>
                      <button type="button" className="setting-row-foot-cancel teriary-button"
                              onClick={() => toggleSetting('likeSet')}>취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="setting-body">
          <h2 className="setting-body-heading">비밀번호 변경</h2>
          <div className="setting-row" style={{cursor: "pointer"}}>
            <h2 className="setting-row-label">비밀번호</h2>
            <div className="setting-row-value">
              {!settingsState.passwordSet ? (<>
                  <div style={{fontSize: "1rem"}}>••••••••</div>
                  <span className="setting-row-change" onClick={() => toggleSetting('passwordSet')}>
          <i className="icon-arrow"></i>
        </span></>
              ) : (
                <div>
                  <form>
                    <fieldset>
                      <div className="textfield">
                        <input
                          type="text"
                          name="password"
                          className="textfield-input"
                          placeholder="비밀번호(8자이상)"
                          value={textValue.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="textfield">
                        <input
                          type="text"
                          name="passwordConfirm"
                          className="textfield-input"
                          placeholder="비밀번호 확인"
                          value={textValue.passwordConfirm}
                          onChange={handleChange}
                        />
                      </div>
                    </fieldset>
                    <footer className="setting-row-foot">
                      <button className="setting-row-foot-confirm primary-button">
                        변경하기
                      </button>
                      <button
                        type="button"
                        className="setting-row-foot-cancel teriary-button"
                        onClick={() => toggleSetting('passwordSet')}
                      >
                        취소
                      </button>
                    </footer>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="setting-body">
          <h2 className="setting-body-heading">이메일 수신여부</h2>
          <div className="setting-row" style={{cursor: "default"}}>
            <h2 className="setting-row-label">이메일</h2>
            <div className="setting-row-value">sniperad@naver.com</div>
          </div>
          <div className="setting-row" style={{cursor: "default"}}>
            <h2 className="setting-row-label">시사 뉴스레터</h2>
            <div className="setting-row-value">
        <span className="switch" style={{fontSize: "1rem"}}>
          <input type="checkbox" role="switch" id="subscribeAgree" name="subscribeAgree"/>
          <label htmlFor="subscribeAgree"></label>
        </span>
            </div>
          </div>
        </div>
        <footer className="setting-foot">
          <button className="setting-foot-logout">로그아웃</button>
          <a className="setting-foot-delete" href="/delete">계정 삭제하기</a>
        </footer>
      </GlobalSection>
    </Layout>
  );
};

export default Setting;
